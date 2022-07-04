import { TikaTest } from "./TikaTest/TikaTest.js"
import { TikaPrimsTest } from "./TikaTest/TikaPrimsTest/TikaPrimsTest.js"
import { TikaInterfaceTest } from "./TikaTest/TikaInterface/TikaInterfaceTest.js"
import process from 'node:process';

class TikaTests{
    constructor(){
        this.verbose;
        this.logIt;
        this.flags()
        this.tt = new TikaTest(this.verbose, this.logIt) //testing TikaTest (don't worry about this too much, 
                                                         //the next tests inheirt their own)
        this.ttpt = new TikaPrimsTest("./logs/", "TikaPrimsTest", this.verbose, this.logIt)
        this.tit = new TikaInterfaceTest("./logs/", "TikaInterfaceTest", this.verbose, this.logIt)
    }
    flags(){
        var flags = process.argv
        flags.forEach(element => {
            if (element=='--verbose'){
                this.verbose=true
            }
            if (element=='--log'){
                this.logIt=true
            }

        });
    }

}


var tikaTests = new TikaTests()