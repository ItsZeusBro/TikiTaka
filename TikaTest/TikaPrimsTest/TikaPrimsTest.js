import * as fs from "node:fs";
import * as assert from "node:assert";
import { TikaTest } from '../TikaTest.js';

export class TikaPrimsTest extends TikaTest{
    constructor(logFile, verbose, logit){
        this.comment(
            "TikiPrimsTest()\n",
            "constructuor()\n",
            "initiates super() TikaTest parent\n",
            "Test each testFunction()\n"
        );
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
        this.comment(
            "testMkdir()\n",
            "create directories with tp.mkdr\n",
            "create files in those directories\n", 
            "assert those files exist\n", 
            "\n",  
        );
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
        this.comment(
            "testCreate()\n",
            "create some.test file\n", 
            "write 14 bytes to it, and assert\n", 
            "create it again to overwrite (offensive programming)\n",  
            "write 13 bytes and assert\n"
        );
        this.prepare(this.tests);

        this.tp.create(this.tests+"some.test");

        fs.writeFileSync(fs.openSync(this.tests+"some.test", 'a'), "this is 14 byt");
        assert.equal(fs.statSync(this.tests+'some.test').size, 14);

        this.tp.create(this.tests+"some.test");

        fs.writeFileSync(fs.openSync(this.tests+"some.test", 'a'), "this 13 bytes");

        assert.equal(fs.statSync(this.tests+'some.test').size, 13);


        this.clean(this.tests);
    }
    testRename(){
        this.comment(
            "testRename()\n",
            "create two files some.test1, and some.test2\n", 
            "fill sometest1 with 14 byte string\n", 
            "assert sometest 1 has 14 bytes\n",
            "rename sometest1 to sometest2 name\n",
            "assert.ok that sometest2 exists and sometest1 does not\n",
            "rename sometest2 to sometest1\n",
            "assert.ok that sometest1 exists and sometest2 does not\n"
        );

        this.prepare(this.tests);

        var sometest1 = this.tests+"some.test1";
        var sometest2 = this.tests+"some.test2";
        this.tp.create(sometest1);


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
        this.comment(
            "testCopyAppend()\n",
            "create 2 files a, b\n", 
            "fill a with 14 byte string\n", 
            "append a to empty b\n", 
            "assert b has 14 bytes\n",
            "append b to a\n",
            "assert a has 28 bytes and b has 14\n",
        );
        this.prepare(this.tests);

        var a = this.tests+'a.foo';
        var b = this.tests+'b.baz';
        this.tp.create(a, b);

        fs.writeFileSync(fs.openSync(a, 'a'), "this 14 bytess");
        this.tp.copyAppend(a, b);
        assert.equal(fs.statSync(a).size, 14);
        assert.equal(fs.statSync(b).size, 14);

        this.tp.copyAppend(b, a);
        assert.equal(fs.statSync(a).size, 28);
        assert.equal(fs.statSync(b).size, 14);



        this.clean(this.tests);
    }
    testTruncate(){
        this.comment(
            "testTruncate()",
            "create 3 files a, b, c\n", 
            "write same message to each\n", 
            "truncate them at different lengths\n", 
            "assert expected values\n"
        );
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

        this.clean(this.tests);
    }
    testDel(){
        this.comment(
            "testDel()\n",
            "create two files a and b\n", 
            "assert that an array with the filenames is equal to the directory list array\n", 
            "delete a and b\n",
            "assert that an array with the filenames is not equal to the directory list array\n"  
        );
        this.prepare(this.tests);

        var a = 'a.foo';
        var b = 'b.baz';

        this.tp.create(this.tests+a, this.tests+b);
        assert.deepEqual(fs.readdirSync(this.tests).sort(), [a, b]);

        this.tp.del(false, a, b);
        assert.notEqual(fs.readdirSync(this.tests).sort(), [a, b]);

        this.clean(this.tests);
    }
    
    testWrite(){
        this.comment(
            "testWrite()\n",
            "create a string and a buffer\n", 
            "write them to their respective files\n", 
            "assert their properties\n",
            "write the same strings to the file again\n",
            "read the files\n",
            "assert that the read values are equal to 2 x the original strings\n"  
        );
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
        this.comment(
            "testOverwrite()\n",
            "create a string and a buffer\n", 
            "write them to their respective files\n", 
            "assert their properties\n",
            "read the files\n",
            "assert that the read values are equal to 1 x the original strings\n",
            "THEN create a string and a buffer\n", 
            "write them to original files\n", 
            "assert their properties\n",
            "read the files\n",
            "assert that the read values are equal to 1 x the original strings\n"
        );
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
        this.comment(
            "assertFileDoesExist()\n",
            "takes a file, error, and message\n", 
            "if the file doesn't exist, throw new Error with error arg\n", 
            "if the file does exist, log it to a comment\n",  
        );
        if(!fs.existsSync(file)){
            throw new Error(error);

        }else if(this.verbose){
            this.comment(message);
        } 

    }

    testRead(){
        this.comment(
            "testRead()\n",
            "create a file a\n", 
            "write some string to file a\n", 
            "read string from file a\n",
            "assert equal\n",
            "create buffer with string\n",
            "create file a\n", 
            "write buffer to file a\n", 
            "read buffer from file a\n",
            "assert read buffer is equal to created buffer\n",
        );
        



    }


}