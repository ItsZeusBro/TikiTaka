import { TikiTakaPrims } from './TikiTakaPrims.js';
import fs, { existsSync } from "node:fs";

class TikiTakaPrimsTest{
    constructor(){
        this.ttp = new TikiTakaPrims()
    }

    //works
    testMkdir(){
        
        this.ttp.mkdr("test0/")
        this.ttp.mkdr("test0/test1")

        this.ttp.mkdr("./test2")
        this.ttp.mkdr("./test2/test3")

        this.ttp.mkdr(process.cwd()+'/test4')
        this.ttp.mkdr(process.cwd()+'/test4/test5')

        this.ttp.create("./test0/test.6")
        this.ttp.create("./test0/test1/test.7")
        this.ttp.mkdr("test0/") //see if functions are overwriting the dir with a new mkdr
        this.ttp.mkdr("test0/test1")

        if(!existsSync('test0/test.6')){
            throw new Error("test0/test.6 does not exist")
        } //tests 0, 1, and 6
        if(!existsSync('test0/test1/test.7')){
            throw new Error("test0/test1/test.7 does not exist")
        } //tests 7

    }        


    testCreate(){

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

var ttpt = new TikiTakaPrimsTest()
ttpt.testMkdir()