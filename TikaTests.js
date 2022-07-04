import { TikaTest } from "./TikaTest/TikaTest.js"
import { TikaPrimsTest } from "./TikaTest/TikaPrimsTest/TikaPrimsTest.js"
import { TikaInterfaceTest } from "./TikaTest/TikaInterface/TikaInterfaceTest.js"
import process from 'node:process';
import { TikaPrims } from "./TikaPrims/TikaPrims.js";

class TikaTests{
    constructor(){
        this.verbose;
        this.log;
        this.flags()
        this.instance = Date.now()
        this.logDir = "./logs/"+this.instance+'/'
        this.tp = new TikaPrims()
        this.tp.mkdr(this.logDir)
        
        this.tt = new TikaTest(this.logDir+"TikaTest.log", this.verbose, this.log) 
        this.ttpt = new TikaPrimsTest(this.logDir+"TikaPrimsTest.log", this.verbose, this.log)
        this.tit = new TikaInterfaceTest(this.logDir+"TikaInterfaceTest.log", this.verbose, this.log)
    }
    flags(){
        var flags = process.argv
        flags.forEach(element => {
            if (element=='--verbose'){
                this.verbose=true
            }
            if (element=='--log'){
                this.log=true
            }

        });
    }

}


var tikaTests = new TikaTests()