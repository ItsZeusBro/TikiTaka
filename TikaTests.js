import { TikaTest } from "./TikaTest/TikaTest.js"
import { TikaPrimsTest } from "./TikaTest/TikaPrimsTest/TikaPrimsTest.js"
import { TikaInterfaceTest } from "./TikaTest/TikaInterface/TikaInterfaceTest.js"
import process from 'node:process';

class TikaTests{
    constructor(){
        //Basically you can run these syncronously and just log to their respective dirs
        //and collect the logs
        this.tt = new TikaTest(process.argv, true)
        this.ttpt = new TikaPrimsTest()
        this.tit = new TikaInterfaceTest()
        this.logs=[]
        this.collectLogs(this.tt, this.ttpt, this.tit)
        this.cleanSubLogs(this.tt, this.ttpt, this.tit)
        this.organizeLogs()
    }
    collectLogs(...objects){
        
        objects.forEach((obj)=>{
            this.logs.push(obj.getLog())
        })

    }
    cleanSubLogs(...objects){
        objects.forEach((obj)=>{
            obj.cleanSubLog()
        })
    }
    organizeLogs(){
        
    }
}


var tikaTests = new TikaTests()