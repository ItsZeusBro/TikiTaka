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
        tp.create(this.tests+"test.4")
        tp.create(this.tests+"test1/test.5")

        //Then checks if files exist. 
        if(!fs.existsSync(this.tests+"test.4")){
            throw new Error(this.tests+"test.4"+" does not exist")
        }else if(this.verbose){console.log("passes file and dir check")} 
        
        if(!fs.existsSync(this.tests+"test1/test.5")){
            throw new Error(this.tests+"test1/test.5"+" does not exist")
        }else if(this.verbose){console.log("passes file and dir check")} 

        //Then creates the dirs again to make sure no overwriting
        tp.mkdr(this.tests)
        tp.mkdr(this.tests+"test1")

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
    testCopyAppend(){
        
    }
    testTruncate(){

    }
    testDel(){

    }
}