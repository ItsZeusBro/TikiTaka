import { TikaPrims } from './TikaPrims.js';
import { existsSync } from "node:fs";

export class TikaPrimsTest{
    constructor(verbose){
        this.verbose = verbose
        this.tp = new TikaPrims()
        this.testMkdir(this.tp)
        this.testCreate(this.tp)
    }

    testMkdir(tp){
        //Tests different strings for making directories. 
        tp.mkdr("test0/")
        tp.mkdr("test0/test1")
        tp.mkdr("./test2")
        tp.mkdr("./test2/test3")
        tp.mkdr(process.cwd()+'/test4')
        tp.mkdr(process.cwd()+'/test4/test5')
        //Then creates files.
        tp.create("./test0/test.6")
        tp.create("./test0/test1/test.7")

        //Then checks if files exist. 
        if(!existsSync('test0/test.6')){
            throw new Error("test0/test.6 does not exist")
        }else if(this.verbose){console.log("passes file and dir check")} 
        
        if(!existsSync('test0/test1/test.7')){
            throw new Error("test0/test1/test.7 does not exist")
        }else if(this.verbose){console.log("passes file and dir check")}

        //Then creates the dirs again
        tp.mkdr("test0/") //see if functions are overwriting the dir with a new mkdr
        tp.mkdr("test0/test1")

        //then checks if same files persist
        if(!existsSync('test0/test.6')){
            throw new Error("test0/test.6 does not exist")
        } else if(this.verbose){console.log("passes file and dir check")}

        if(!existsSync('test0/test1/test.7')){
            throw new Error("test0/test1/test.7 does not exist")
        } else if(this.verbose){console.log("passes file and dir check")}

        //then cleans up
        tp.del(true, "./test0", "./test2", "./test4")

    }        


    testCreate(tp){

        //create file, check if it exists
        tp.create("./some.test")
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