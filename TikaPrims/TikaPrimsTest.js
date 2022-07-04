import { TikaPrims } from './TikaPrims.js';
import * as fs from "node:fs";
import * as assert from "node:assert";
import { LOG_SONG } from '../LOG_SONG.js';
import { SourceMap } from 'node:module';
export class TikaPrimsTest{
    constructor(verbose, export_to){
        this.export_to = export_to
        this.logStrm = null 
        this.log()
        this.verbose = verbose
        this.tests='./tests/'
        this.tp = new TikaPrims()
        this.testMkdir()
        this.testCreate()
        this.testRename()
        this.testCopyAppend()
        this.testTruncate()
        this.testDel()
        this.testWrite()
        this.testOverwrite()
    }
    log(){
        //logs should be set up here
        //may have to spin up child process to use this
        if(this.export_to){
            this.logStrm = this.logStream()
            process.stdout.pipe(this.logStrm)
            process.stderr.pipe(this.logStrm)
            process.on('close', data => {
                console.log(data);
              });
        }
    }
    clean(){
        this.tp.del(true, this.tests)
    }
    prepare(){
        this.clean()
        this.tp.mkdr(this.tests)
    }
    logStream(){
        var f_name=this.export_to+Date.now()
        return fs.createWriteStream(f_name,{ flags: 'a' })  
    }
    testMkdir(){
        var paths=[
            this.tests, 
            this.tests+"test1", 
            process.cwd()+this.tests+'test2', 
            process.cwd()+this.tests+'test2/test3'
        ]
        //Tests different path strings (relative and absotlute) for making directories. 
        paths.forEach(element => {
            this.tp.mkdr(element)
        });
        //Then creates files.
        this.tp.create(this.tests+"test.4", this.tests+"test1/test.5")
        //Then checks if files exist. 
        this.assertFileDoesExist(
            this.tests+"test.4", 
            this.tests+"test.4"+" does not exist in testMkdir()", 
            this.tests+"test.4"+" does exist in testMkdir()"
        )
        this.assertFileDoesExist(
            this.tests+"test1/test.5", 
            this.tests+"test1/test.5"+" does not exist in testMkdir()", 
            this.tests+"test1/test.5"+" does exist in testMkdir()"
        )
        //Then creates the dirs again to make sure no overwriting
        this.tp.mkdr(this.tests, this.tests+"test1")
        //then checks if same files persist
        this.assertFileDoesExist(
            this.tests+"test.4", 
            this.tests+"test.4"+" does not exist in testMkdir()", 
            this.tests+"test.4"+" does exist in testMkdir()"
        )
        this.assertFileDoesExist(
            this.tests+"test1/test.5", 
            this.tests+"test1/test.5"+" does not exist in testMkdir()", 
            this.tests+"test1/test.5"+" does exist in testMkdir()"
        )
        //clean up tests
        this.clean()        
    }        


    testCreate(){
        this.prepare()
        this.tp.create(this.tests+"some.test")
        //load it with data, check file for data
        fs.writeFileSync(fs.openSync(this.tests+"some.test", 'a'), "this is 14 byt");
        assert.equal(fs.statSync(this.tests+'some.test').size, 14);
        //create file, load it with data, create it again: expected result
        this.tp.create(this.tests+"some.test")
        fs.writeFileSync(fs.openSync(this.tests+"some.test", 'a'), "this 13 bytes");
        assert.equal(fs.statSync(this.tests+'some.test').size, 13);
        //then cleans up
        this.clean()
    }
    testRename(){
        this.prepare()
        //create file
        var sometest1 = this.tests+"some.test1"
        var sometest2 = this.tests+"some.test2"
        this.tp.create(sometest1)
        //add data to it
        fs.writeFileSync(fs.openSync(sometest1, 'a'), "this is 14 byt");
        assert.equal(fs.statSync(sometest1).size, 14);
        //rename it a few different ways 
        this.tp.rename(sometest1, sometest2)
        //make sure the file sometest2 exists
        assert.ok(fs.existsSync(sometest2))
        //make sure the file sometest1 does not exist
        assert.ok(!fs.existsSync(sometest1))
        //rename the other way and retest
        this.tp.rename(sometest2, sometest1)
        assert.ok(fs.existsSync(sometest1))
        //make sure the file sometest1 does not exist
        assert.ok(!fs.existsSync(sometest2))
        this.clean()
    }
    testCopyAppend(){
        this.prepare()
        //create two files a and b
        var a = this.tests+'a.foo'
        var b = this.tests+'b.baz'
        this.tp.create(a, b)
        //fill a with 14 bytes
        fs.writeFileSync(fs.openSync(a, 'a'), "this 14 bytess");
        //append to b
        this.tp.copyAppend(a, b)
        assert.equal(fs.statSync(a).size, 14);
        assert.equal(fs.statSync(b).size, 14);
        //append b to a (a should have 28 bytes)
        this.tp.copyAppend(b, a)
        assert.equal(fs.statSync(a).size, 28);
        assert.equal(fs.statSync(b).size, 14);
        this.clean()
    }
    testTruncate(){
        this.prepare()
        //create 3 files
        var a = this.tests+'a.foo'
        var b = this.tests+'b.bar'
        var c = this.tests+'c.baz'
        this.tp.create(a, b, c)
        //load them with same data
        fs.writeFileSync(fs.openSync(a, 'a'), "this 14 bytess");
        fs.writeFileSync(fs.openSync(b, 'a'), "this 14 bytess");
        fs.writeFileSync(fs.openSync(c, 'a'), "this 14 bytess");
        //truncate them at different lengths
        var failures = this.tp.truncate({'./tests/a.foo': 10, './tests/b.bar': 5, './tests/c.baz': 1}) //should end up at 10, 5, and 1
        //assert expected behavior
        assert.equal(fs.statSync(a).size, 10);
        assert.equal(fs.statSync(b).size, 5);
        assert.equal(fs.statSync(c).size, 1);
        this.clean()
    }
    testDel(){
        this.prepare()
        //create 2
        var a = 'a.foo'
        var b = 'b.baz'
        this.tp.create(this.tests+a, this.tests+b)
        console.log(fs.readdirSync(this.tests).sort(), [a, b])
        assert.deepEqual(fs.readdirSync(this.tests).sort(), [a, b])
        this.tp.del(true, a, b)
        assert.notEqual(fs.readdirSync(this.tests).sort(), [a, b])
        this.clean()
    }
    
    testWrite(){
        this.prepare()
        //we should be able to write many strings or buffers to files using the same function call
        var wickedString = "some wicked string"
        var wickedBuffer = Buffer.from("some wicked buffer")
        this.tp.write({'./tests/wickedString':wickedString, './tests/wickedBuffer':wickedBuffer})
        //check strings
        var wickedStringRead = fs.readFileSync('./tests/wickedString', {encoding:'utf-8'})
        var wickedBufferRead = fs.readFileSync('./tests/wickedBuffer', {encoding:"binary"})
        assert.equal(wickedString, wickedStringRead)
        assert.equal(wickedBuffer, wickedBufferRead)
        
        this.tp.write({'./tests/wickedString':wickedString, './tests/wickedBuffer':wickedBuffer})

        wickedStringRead = fs.readFileSync('./tests/wickedString', {encoding:'utf-8'})
        wickedBufferRead = fs.readFileSync('./tests/wickedBuffer', {encoding:"binary"})
        assert.equal(wickedString+wickedString, wickedStringRead)
        assert.equal(Buffer.concat([wickedBuffer, wickedBuffer]), wickedBufferRead)
        this.clean()
    }
    testOverwrite(){
        this.prepare()
        //we should be able to write many strings or buffers to files using the same function call
        var wickedString = "some wicked string"
        var wickedBuffer = Buffer.from("some wicked buffer")
        this.tp.overwrite({'./tests/wickedString':wickedString, './tests/wickedBuffer':wickedBuffer})
        //check strings
        var wickedStringRead = fs.readFileSync('./tests/wickedString', {encoding:'utf-8'})
        var wickedBufferRead = fs.readFileSync('./tests/wickedBuffer', {encoding:"binary"})
        assert.equal(wickedString, wickedStringRead)
        assert.equal(wickedBuffer, wickedBufferRead)
        
        var wickedString2 = "some wicked string 2"
        var wickedBuffer2 = Buffer.from("some wicked buffer 2")
        this.tp.overwrite({'./tests/wickedString':wickedString2, './tests/wickedBuffer':wickedBuffer2})

        wickedStringRead = fs.readFileSync('./tests/wickedString', {encoding:'utf-8'})
        wickedBufferRead = fs.readFileSync('./tests/wickedBuffer', {encoding:"binary"})

        assert.equal(wickedString2, wickedStringRead)
        assert.equal(wickedBuffer2, wickedBufferRead)
        this.clean()
    }
    assertFileDoesExist(file, error="", message=""){
        if(!fs.existsSync(file)){
            throw new Error(error)
        }else if(this.verbose){
            console.log(message)
        } 
    }

    testRead(){
        //create a file
        //write to it n number of bytes and record the string
        //read from it and check the number of bytes
    }


}