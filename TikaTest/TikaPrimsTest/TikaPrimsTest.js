import * as fs from "node:fs";
import * as assert from "node:assert";
import { TikaTest } from '../TikaTest.js';

export class TikaPrimsTest extends TikaTest{
    constructor(logFile, verbose, logit){
        super(logFile, verbose, logit);
        this.tests = './tests/';
        this.testMkdir();
        this.testCreate();
        this.testRename();
        this.testCopyAppend();
        this.testTruncate();
        this.testDel();
        this.testWrite();
        this.testOverwrite();
    }
    
    testMkdir(){
        this.log("testMkdir()");

        var paths=[
            this.tests, 
            this.tests+"test1", 
            process.cwd()+this.tests+'test2', 
            process.cwd()+this.tests+'test2/test3'
        ];

        paths.forEach(element => {
            this.tp.mkdr(element);
        });

        this.tp.create(this.tests+"test.4", this.tests+"test1/test.5");

        this.assertFileDoesExist(
            this.tests+"test.4", 
            "ERROR: "+this.tests+"test.4"+" does not exist in testMkdir()", 
            this.tests+"test.4"+" does exist in testMkdir()"
        );

        this.assertFileDoesExist(
            this.tests+"test1/test.5", 
            "ERROR: "+this.tests+"test1/test.5"+" does not exist in testMkdir()", 
            this.tests+"test1/test.5"+" does exist in testMkdir()"
        );

        this.tp.mkdr(this.tests, this.tests+"test1");
        this.log('mkdr(this.tests, this.tests+`test1` in testMkdir()');

        this.assertFileDoesExist(
            this.tests+"test.4", 
            "ERROR: "+this.tests+"test.4"+" does not exist in testMkdir()", 
            this.tests+"test.4"+" does exist in testMkdir()"
        );

        this.assertFileDoesExist(
            this.tests+"test1/test.5", 
            "ERROR: "+this.tests+"test1/test.5"+" does not exist in testMkdir()", 
            this.tests+"test1/test.5"+" does exist in testMkdir()"
        );

        this.clean(this.tests);      
    }        


    testCreate(){
        this.log("testCreate()");
        this.prepare(this.tests);

        this.tp.create(this.tests+"some.test");
        this.log('create(this.tests+`some.test` in testCreate()');

        fs.writeFileSync(fs.openSync(this.tests+"some.test", 'a'), "this is 14 byt");
        this.log('fs.writeFileSync(fs.openSync(this.tests+`some.test`,`a`), `this is 14 byt`) in testCreate()');
        assert.equal(fs.statSync(this.tests+'some.test').size, 14);

        this.tp.create(this.tests+"some.test");
        this.log(`this.tp.create(this.tests+"some.test") in testCreate()`);

        fs.writeFileSync(fs.openSync(this.tests+"some.test", 'a'), "this 13 bytes");
        this.log(`fs.writeFileSync(fs.openSync(this.tests+"some.test", 'a'), "this 13 bytes"); in testCreate`);

        assert.equal(fs.statSync(this.tests+'some.test').size, 13);
        this.clean(this.tests);
    }
    testRename(){
        this.log("testRename()");
        this.prepare(this.tests);

        var sometest1 = this.tests+"some.test1";
        var sometest2 = this.tests+"some.test2";
        this.tp.create(sometest1);
        this.log(`this.tp.create(sometest1) in testRename()`);

        fs.writeFileSync(fs.openSync(sometest1, 'a'), "this is 14 byt");
        assert.equal(fs.statSync(sometest1).size, 14);

        this.tp.rename(sometest1, sometest2);
        assert.ok(fs.existsSync(sometest2));
        assert.ok(!fs.existsSync(sometest1));

        this.tp.rename(sometest2, sometest1);
        assert.ok(fs.existsSync(sometest1));
        assert.ok(!fs.existsSync(sometest2));

        this.clean(this.tests);
    }
    testCopyAppend(){
        this.log("testCopyAppend()");
        this.prepare(this.tests);
        //create two files a and b
        var a = this.tests+'a.foo';
        var b = this.tests+'b.baz';
        this.tp.create(a, b);
        //fill a with 14 bytes
        fs.writeFileSync(fs.openSync(a, 'a'), "this 14 bytess");
        //append to b
        this.tp.copyAppend(a, b);
        assert.equal(fs.statSync(a).size, 14);
        assert.equal(fs.statSync(b).size, 14);
        //append b to a (a should have 28 bytes)
        this.tp.copyAppend(b, a);
        assert.equal(fs.statSync(a).size, 28);
        assert.equal(fs.statSync(b).size, 14);
        this.clean(this.tests);
    }
    testTruncate(){
        this.log("testTruncate()");
        this.prepare(this.tests);
        //create 3 files
        var a = this.tests+'a.foo';
        var b = this.tests+'b.bar';
        var c = this.tests+'c.baz';
        this.tp.create(a, b, c);

        fs.writeFileSync(fs.openSync(a, 'a'), "this 14 bytess");
        fs.writeFileSync(fs.openSync(b, 'a'), "this 14 bytess");
        fs.writeFileSync(fs.openSync(c, 'a'), "this 14 bytess");
        var failures = this.tp.truncate({
            './tests/a.foo': 10, 
            './tests/b.bar': 5, 
            './tests/c.baz': 1
        });
        assert.equal(fs.statSync(a).size, 10);
        assert.equal(fs.statSync(b).size, 5);
        assert.equal(fs.statSync(c).size, 1);
        this.log(``)

        this.clean(this.tests);
    }
    testDel(){
        this.log("testDel()");
        this.prepare(this.tests);

        var a = 'a.foo';
        var b = 'b.baz';

        this.tp.create(this.tests+a, this.tests+b);
        assert.deepEqual(fs.readdirSync(this.tests).sort(), [a, b]);

        this.tp.del(true, a, b);
        assert.notEqual(fs.readdirSync(this.tests).sort(), [a, b]);

        this.clean(this.tests);
    }
    
    testWrite(){
        this.log("testWrite()");
        this.prepare(this.tests);

        var wickedString = "some wicked string";
        var wickedBuffer = Buffer.from("some wicked buffer");

        this.tp.write({'./tests/wickedString':wickedString, './tests/wickedBuffer':wickedBuffer});
        var wickedStringRead = fs.readFileSync('./tests/wickedString', {encoding:'utf-8'});
        var wickedBufferRead = fs.readFileSync('./tests/wickedBuffer', {encoding:"binary"});
        assert.equal(wickedString, wickedStringRead);
        assert.equal(wickedBuffer, wickedBufferRead);
        
        this.tp.write({'./tests/wickedString':wickedString, './tests/wickedBuffer':wickedBuffer});
        wickedStringRead = fs.readFileSync('./tests/wickedString', {encoding:'utf-8'});
        wickedBufferRead = fs.readFileSync('./tests/wickedBuffer', {encoding:"binary"});
        assert.equal(wickedString+wickedString, wickedStringRead);
        assert.equal(Buffer.concat([wickedBuffer, wickedBuffer]), wickedBufferRead);

        this.clean(this.tests);
    }
    testOverwrite(){
        this.log("testOverwrite()");
        this.prepare(this.tests);
        //we should be able to write many strings or buffers to files using the same function call
        var wickedString = "some wicked string";
        var wickedBuffer = Buffer.from("some wicked buffer");
        this.tp.overwrite({'./tests/wickedString':wickedString, './tests/wickedBuffer':wickedBuffer});
        //check strings
        var wickedStringRead = fs.readFileSync('./tests/wickedString', {encoding:'utf-8'});
        var wickedBufferRead = fs.readFileSync('./tests/wickedBuffer', {encoding:"binary"});
        assert.equal(wickedString, wickedStringRead);
        assert.equal(wickedBuffer, wickedBufferRead);
        
        var wickedString2 = "some wicked string 2";
        var wickedBuffer2 = Buffer.from("some wicked buffer 2");
        this.tp.overwrite({'./tests/wickedString':wickedString2, './tests/wickedBuffer':wickedBuffer2});

        wickedStringRead = fs.readFileSync('./tests/wickedString', {encoding:'utf-8'});
        wickedBufferRead = fs.readFileSync('./tests/wickedBuffer', {encoding:"binary"});

        assert.equal(wickedString2, wickedStringRead);
        assert.equal(wickedBuffer2, wickedBufferRead);
        this.clean(this.tests);
    }
    assertFileDoesExist(file, error="", message=""){
        if(!fs.existsSync(file)){
            throw new Error(error);

        }else if(this.verbose){
            this.log(message);
        } 
    }

    testRead(){
        this.log("testRead())");

        //create a file
        //write to it n number of bytes and record the string
        //read from it and check the number of bytes
    }


}