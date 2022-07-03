import { TikiTakaPrims } from './TikiTakaPrims.js';
import fs, { existsSync } from "node:fs";

class TikiTakaPrimsTest{
    constructor(flags){
        this.verbose=null
        flags.forEach(element => {
            if (element=='--verbose'){
                this.verbose=true
            }
        });
        this.ttp = new TikiTakaPrims()
        this.testMkdir()
        this.testCreate()
    }

    testMkdir(){
        //Tests different strings for making directories. 
        this.ttp.mkdr("test0/")
        this.ttp.mkdr("test0/test1")
        this.ttp.mkdr("./test2")
        this.ttp.mkdr("./test2/test3")
        this.ttp.mkdr(process.cwd()+'/test4')
        this.ttp.mkdr(process.cwd()+'/test4/test5')
        //Then creates files.
        this.ttp.create("./test0/test.6")
        this.ttp.create("./test0/test1/test.7")

        //Then checks if files exist. 
        if(!existsSync('test0/test.6')){
            throw new Error("test0/test.6 does not exist")
        }else if(this.verbose){console.log("passes file and dir check")} 
        
        if(!existsSync('test0/test1/test.7')){
            throw new Error("test0/test1/test.7 does not exist")
        }else if(this.verbose){console.log("passes file and dir check")}

        //Then creates the dirs again
        this.ttp.mkdr("test0/") //see if functions are overwriting the dir with a new mkdr
        this.ttp.mkdr("test0/test1")

        //then checks if same files persist
        if(!existsSync('test0/test.6')){
            throw new Error("test0/test.6 does not exist")
        } else if(this.verbose){console.log("passes file and dir check")}

        if(!existsSync('test0/test1/test.7')){
            throw new Error("test0/test1/test.7 does not exist")
        } else if(this.verbose){console.log("passes file and dir check")}

        //then cleans up
        this.ttp.del(true, "./test0", "./test2", "./test4")

    }        


    testCreate(){

        //create file, check if it exists
        this.ttp.create("./some.test")
        //create file, load it with data, check file for data

        //create file, load it with data, create it again: expected result?

        //create file with different string types

        //and repeat tests

        //then cleans up

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
var ttpt = new TikiTakaPrimsTest(process.argv.slice(2))
