import { TikaTest } from "./TikaTest/TikaTest.js"
import { TikaPrimsTest } from "./TikaTest/TikaPrimsTest/TikaPrimsTest.js"
import { TikaInterfaceTest } from "./TikaTest/TikaInterface/TikaInterfaceTest.js"
import process from 'node:process';
import { TikaPrims } from "./TikaPrims/TikaPrims.js";

class Comnt{
    constructor(){
        this.verbose;
        this.flags()
        this.instance = Date.now()
        this.logDir = "./logs/"+this.instance+'/'
        this.tp = new TikaPrims()
        this.tp.mkdr(this.logDir)
    }

    flags(){
        var flags = process.argv
        flags.forEach(element => {
            if (element=='--verbose'){
                this.verbose=true
            }
        });
    }
    comnt(...data){
        //Keep all this magical stuff right here, don't separate it
        var stk = new Error().stack
        var clss = Array(stk.split('at')[1].split('.'))[0][0].trim()
        console.log(clss)
        var obj={}
        obj['./logs/'+clss+'.log']=data+'\n'
        this.tp.write(obj)

        if (this.verbose){
            console.log(data.join(' '))
        }


    }

}

class TikaTests extends Comnt{
    constructor(){
        super()
        // this.tt = new TikaTest() 
        // this.ttpt = new TikaPrimsTest()
        // this.tit = new TikaInterfaceTest()
        this.comnt()
    }
}