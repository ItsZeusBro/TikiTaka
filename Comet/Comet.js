import { TikaPrims } from "../TikaPrims/TikaPrims";
export class Comet{
    constructor(){
        this.verbose;
        this.flags()
        this.instance = Date.now()
        this.logDir = "./comet/"+this.instance+'/'
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
        var fnc = Array(stk.split('at'))[0][2].split('.')[1].trim().split(" ")[0]
        var clss = Array(stk.split('at'))[0][2].split('.')[0].trim()
        var obj={}
        obj['./logs/'+clss+'.log']= fnc+"()\n"+data.join()+'\n'
        this.tp.write(obj)
        if (this.verbose){
            console.log(data.join(' '))
        }
    }
}