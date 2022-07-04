import { TikaPrims } from "../TikaPrims/TikaPrims.js";
import * as fs from "node:fs";
export class Comet{
    constructor(){
        this.verbose;
        this.flags()
        this.tp = new TikaPrims()
        this.instance = Date.now()
        this.cometsDir=process.cwd()+'/comets/'
        if (!fs.existsSync(this.cometsDir)){
            this.tp.mkdr(this.cometsDir)
        }
        this.cometDir = this.cometsDir+"comet_"+this.instance+'/'
        if (!fs.existsSync(this.cometDir)){
            this.tp.mkdr(this.cometDir)
        }
    }
    flags(){
        var flags = process.argv
        flags.forEach(element => {
            if (element=='--verbose'){
                this.verbose=true
            }
        });
    }
    comet(...data){
        //Keep all this magical stuff right here, don't separate it
        var stk = new Error().stack.split('at')
        console.log(stk)
        // var fnc = Array(stk.split('at'))[0][2].split('.')[1].trim().split(" ")[0]
        // var clss = Array(stk.split('at'))[0][2].split('.')[0].trim()
        //console.log(fnc, clss)
        // var obj={}
        // obj['./logs/'+clss+'.log']= fnc+"()\n"+data.join()+'\n'
        // this.tp.write(obj)
        // if (this.verbose){
        //     console.log(data.join(' '))
        // }
    }
}