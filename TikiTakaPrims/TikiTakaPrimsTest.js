import { TikiTakaPrims } from './TikiTakaPrims/TikiTakaPrims.js';
import { existsSync } from "node:fs";

class TikiTakaPrimsTest{
    constructor(verbose){
        this.verbose = verbose
        this.ttp = new TikiTakaPrims()
        this.testMkdir(this.ttp)
        this.testCreate(this.ttp)
    }

    testMkdir(ttp){
        //Tests different strings for making directories. 
        ttp.mkdr("test0/")
        ttp.mkdr("test0/test1")
        ttp.mkdr("./test2")
        ttp.mkdr("./test2/test3")
        ttp.mkdr(process.cwd()+'/test4')
        ttp.mkdr(process.cwd()+'/test4/test5')
        //Then creates files.
        ttp.create("./test0/test.6")
        ttp.create("./test0/test1/test.7")

        //Then checks if files exist. 
        if(!existsSync('test0/test.6')){
            throw new Error("test0/test.6 does not exist")
        }else if(this.verbose){console.log("passes file and dir check")} 
        
        if(!existsSync('test0/test1/test.7')){
            throw new Error("test0/test1/test.7 does not exist")
        }else if(this.verbose){console.log("passes file and dir check")}

        //Then creates the dirs again
        ttp.mkdr("test0/") //see if functions are overwriting the dir with a new mkdr
        ttp.mkdr("test0/test1")

        //then checks if same files persist
        if(!existsSync('test0/test.6')){
            throw new Error("test0/test.6 does not exist")
        } else if(this.verbose){console.log("passes file and dir check")}

        if(!existsSync('test0/test1/test.7')){
            throw new Error("test0/test1/test.7 does not exist")
        } else if(this.verbose){console.log("passes file and dir check")}

        //then cleans up
        ttp.del(true, "./test0", "./test2", "./test4")

    }        


    testCreate(ttp){

        //create file, check if it exists
        ttp.create("./some.test")
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