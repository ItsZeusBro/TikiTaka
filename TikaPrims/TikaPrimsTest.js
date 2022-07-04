import { TikaPrims } from './TikaPrims.js';
import * as fs from "node:fs";
import * as assert from "node:assert";
import { LOG_SONG } from '../LOG_SONG.js';
import { SourceMap } from 'node:module';
export class TikaPrimsTest{
    constructor(verbose, export_to){
        this.verbose = verbose
        this.export_to = export_to
        this.tests='./tests/'
        this.tp = new TikaPrims()
        this.testMkdir(this.tp)
        this.testCreate(this.tp)
        this.testRename(this.tp)
        this.testCopyAppend(this.tp)
        this.testTruncate(this.tp)
        this.testDel(this.tp)
        this.testWrite(this.tp)
        this.testOverwrite(this.tp)
    }

    testMkdir(tp){
        var clean_these=[
            this.tests, 
            this.tests+"test1", 
            process.cwd()+this.tests+'test2', 
            process.cwd()+this.tests+'test2/test3'
        ]

        //Tests different path strings (relative and absotlute) for making directories. 
        clean_these.forEach(element => {
            tp.mkdr(element)
        });

        //Then creates files.
        tp.create(this.tests+"test.4", this.tests+"test1/test.5")

        //Then checks if files exist. 
        if(!fs.existsSync(this.tests+"test.4")){
            throw new Error(this.tests+"test.4"+" does not exist")
        }else if(this.verbose){console.log("passes file and dir check")} 
        
        if(!fs.existsSync(this.tests+"test1/test.5")){
            throw new Error(this.tests+"test1/test.5"+" does not exist")
        }else if(this.verbose){console.log("passes file and dir check")} 

        //Then creates the dirs again to make sure no overwriting
        tp.mkdr(this.tests, this.tests+"test1")

        //then checks if same files persist
        if(!fs.existsSync(this.tests+"test.4")){
            throw new Error(this.tests+"test.4"+" does not exist")
        }else if(this.verbose){console.log("passes file and dir check")} 
        
        if(!fs.existsSync(this.tests+"test1/test.5")){
            throw new Error(this.tests+"test1/test.5"+" does not exist")
        }else if(this.verbose){console.log("passes file and dir check")} 

        //then cleans up or not, depending on flag
        //WORK ON IMPROVING THE LOGGING OVER TIME
        if (this.export_to){
            console.log(this.export_to)
            var f_name=this.export_to+Date.now()
            tp.create(f_name)
            fs.writeFileSync(fs.openSync(f_name, 'w+'), LOG_SONG)
        }
        //clean up tests
        tp.del(true, clean_these[0])
        
    }        


    testCreate(tp){
        var clean_these=[this.tests]
        //create file, check if it exists
        tp.mkdr(this.tests)
        tp.create(this.tests+"some.test")
        //load it with data, check file for data
        fs.writeFileSync(fs.openSync(this.tests+"some.test", 'a'), "this is 14 byt");
        assert.equal(fs.statSync(this.tests+'some.test').size, 14);
        //create file, load it with data, create it again: expected result
        tp.create(this.tests+"some.test")
        fs.writeFileSync(fs.openSync(this.tests+"some.test", 'a'), "this 13 bytes");
        assert.equal(fs.statSync(this.tests+'some.test').size, 13);
        //then cleans up
        tp.del(true, clean_these[0])
    }
    testRename(tp){
        //create file
        //add data to it
        //rename it a few different ways 
        //make sure file contents are not modified
        //make sure new file names match the renamed name
        var clean_these=[this.tests]
        tp.mkdr(this.tests)
        var sometest1 = this.tests+"some.test1"
        var sometest2 = this.tests+"some.test2"
        tp.create(sometest1)
        fs.writeFileSync(fs.openSync(sometest1, 'a'), "this is 14 byt");
        assert.equal(fs.statSync(sometest1).size, 14);
        tp.rename(sometest1, sometest2)
        //make sure the file sometest2 exists
        assert.ok(fs.existsSync(sometest2))
        //make sure the file sometest1 does not exist
        assert.ok(!fs.existsSync(sometest1))
        //rename the other way and retest
        tp.rename(sometest2, sometest1)
        assert.ok(fs.existsSync(sometest1))
        //make sure the file sometest1 does not exist
        assert.ok(!fs.existsSync(sometest2))
        tp.del(true, clean_these[0])
    }
    testCopyAppend(tp){
        //copy from one file and append to another
        var clean_these=[this.tests]
        tp.mkdr(this.tests)
        //create two files a and b
        var a = this.tests+'a.foo'
        var b = this.tests+'b.baz'
        tp.create(a, b)
        //fill a with 14 bytes
        fs.writeFileSync(fs.openSync(a, 'a'), "this 14 bytess");
        //append to b
        tp.copyAppend(a, b)
        assert.equal(fs.statSync(a).size, 14);
        assert.equal(fs.statSync(b).size, 14);
        //append b to a (a should have 28 bytes)
        tp.copyAppend(b, a)
        assert.equal(fs.statSync(a).size, 28);
        assert.equal(fs.statSync(b).size, 14);
        tp.del(true, clean_these[0])

    }
    testTruncate(tp){
        var clean_these=[this.tests]
        tp.mkdr(this.tests)
        //create 3 files
        var a = this.tests+'a.foo'
        var b = this.tests+'b.bar'
        var c = this.tests+'c.baz'
        tp.create(a, b, c)
        //load them with same data
        fs.writeFileSync(fs.openSync(a, 'a'), "this 14 bytess");
        fs.writeFileSync(fs.openSync(b, 'a'), "this 14 bytess");
        fs.writeFileSync(fs.openSync(c, 'a'), "this 14 bytess");
        //truncate them at different lengths
        var failures = tp.truncate({'./tests/a.foo': 10, './tests/b.bar': 5, './tests/c.baz': 1}) //should end up at 10, 5, and 1
        //assert expected behavior
        assert.equal(fs.statSync(a).size, 10);
        assert.equal(fs.statSync(b).size, 5);
        assert.equal(fs.statSync(c).size, 1);
        tp.del(true, clean_these[0])

    }
    testDel(tp){
        var clean_these=[this.tests]
        tp.del(this.tests)
        tp.mkdr(this.tests)
        //create 2
        var a = 'a.foo'
        var b = 'b.baz'
        tp.create(this.tests+a, this.tests+b)
        console.log(fs.readdirSync(this.tests).sort(), [a, b])
        assert.deepEqual(fs.readdirSync(this.tests).sort(), [a, b])
        tp.del(true, a, b)
        assert.notEqual(fs.readdirSync(this.tests).sort(), [a, b])
        tp.del(true, clean_these[0])
    }
    
    testWrite(tp){
        var clean_these=[this.tests]
        tp.del(this.tests)
        tp.mkdr(this.tests)
        //we should be able to write many strings or buffers to files using the same function call
        var wickedString = "some wicked string"
        var wickedBuffer = Buffer.from("some wicked buffer")
        //if the files don't exist, create them and write to them. If they do, append to them 
        //this is asyncronous, in some sense, because you don't know which will be written first
        //If you don't desire this behavior chain two write functions together
        tp.write({'./tests/wickedString':wickedString, './tests/wickedBuffer':wickedBuffer})
        //check strings
        var wickedStringRead = fs.readFileSync('./tests/wickedString', {encoding:'utf-8'})
        var wickedBufferRead = fs.readFileSync('./tests/wickedBuffer', {encoding:"binary"})
        assert.equal(wickedString, wickedStringRead)
        assert.equal(wickedBuffer, wickedBufferRead)
        
        tp.write({'./tests/wickedString':wickedString, './tests/wickedBuffer':wickedBuffer})

        wickedStringRead = fs.readFileSync('./tests/wickedString', {encoding:'utf-8'})
        wickedBufferRead = fs.readFileSync('./tests/wickedBuffer', {encoding:"binary"})
        assert.equal(wickedString+wickedString, wickedStringRead)
        assert.equal(Buffer.concat([wickedBuffer, wickedBuffer]), wickedBufferRead)
        tp.del(true, clean_these[0])

    }
    testOverwrite(tp){
        var clean_these=[this.tests]
        tp.del(this.tests)
        tp.mkdr(this.tests)
        //we should be able to write many strings or buffers to files using the same function call
        var wickedString = "some wicked string"
        var wickedBuffer = Buffer.from("some wicked buffer")
        //if the files don't exist, create them and write to them. If they do, append to them 
        //this is asyncronous, in some sense, because you don't know which will be written first
        //If you don't desire this behavior chain two write functions together
        tp.overwrite({'./tests/wickedString':wickedString, './tests/wickedBuffer':wickedBuffer})
        //check strings
        var wickedStringRead = fs.readFileSync('./tests/wickedString', {encoding:'utf-8'})
        var wickedBufferRead = fs.readFileSync('./tests/wickedBuffer', {encoding:"binary"})
        assert.equal(wickedString, wickedStringRead)
        assert.equal(wickedBuffer, wickedBufferRead)
        
        var wickedString2 = "some wicked string 2"
        var wickedBuffer2 = Buffer.from("some wicked buffer 2")
        tp.overwrite({'./tests/wickedString':wickedString2, './tests/wickedBuffer':wickedBuffer2})

        wickedStringRead = fs.readFileSync('./tests/wickedString', {encoding:'utf-8'})
        wickedBufferRead = fs.readFileSync('./tests/wickedBuffer', {encoding:"binary"})

        assert.equal(wickedString2, wickedStringRead)
        assert.equal(wickedBuffer2, wickedBufferRead)
        tp.del(true, clean_these[0])

    }

    testRead(tp){

    }
}