import { TikaTest } from "./TikaTest/TikaTest.js"
import { TikaPrimsTest } from "./TikaTest/TikaPrimsTest/TikaPrimsTest.js"
import { TikaInterfaceTest } from "./TikaTest/TikaInterface/TikaInterfaceTest.js"
import process from 'node:process';
import { TikaPrims } from "./TikaPrims/TikaPrims.js";

class TikaTests{
    constructor(){
        this.verbose;
        this.logIt;
        this.flags()
        this.instance = Date.now()
        this.logDir = "./logs/"+this.instance+'/'
        this.tp = new TikaPrims()
        this.tp.mkdr(this.logDir)
        this.tt = new TikaTest(this.logDir+"TikaTest.log", this.verbose, this.logIt) 
        //testing TikaTest (don't worry about this too much, the next tests inheirt their own)
        this.ttpt = new TikaPrimsTest(this.logDir+"TikaPrimsTest.log", this.verbose, this.logIt)
        this.tit = new TikaInterfaceTest(this.logDir+"TikaInterfaceTest.log", this.verbose, this.logIt)
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