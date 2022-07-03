import { TikaPrims } from './TikaPrims.js';
import * as fs from "node:fs";
import * as assert from "node:assert";
import { LOG_SONG } from '../LOG_SONG.js';
export class TikaPrimsTest{
    constructor(verbose, export_to){
        this.verbose = verbose
        this.export_to = export_to
        this.tests='./tests/'
        this.tp = new TikaPrims()
        this.testMkdir(this.tp)
        this.testCreate(this.tp)
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
        var clean_these=[
            this.tests
        ]
        //create file, check if it exists
        tp.mkdr('./tests')
        tp.create("./tests/some.test")
        //create file, load it with data, check file for data
        
        fs.writeFileSync(fs.openSync("./tests/some.test", 'w+'), "some test data");
        console.log(fs.statSync('./tests/some.test'));
        //assert.value(fs.stat('./some.test'))
        //create file, load it with data, create it again: expected result?

        //create file with different string types

        //and repeat tests

        //then cleans up
        //tp.del(true, clean_these[0])
    }
    testRename(){

    }
    testCopyAppend(){

    }
    testTruncate(){

    }
    testDel(){

    }
}