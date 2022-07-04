import * as fs from "node:fs";

export class Comet{
    constructor(){
        this.verbose;
        this.flags()
        this.cometsDir=process.cwd()+'/comets/'
        if (!fs.existsSync(this.cometsDir)){
            fs.mkdirSync(this.cometsDir)
        }
        this.instance = process.pid
        this.cometFile = this.cometsDir+"comet_"+this.instance+'.comet'
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
        fs.writeFileSync(this.cometFile, data.join()+'\n', {flag:'a'})
        if (this.verbose){
            console.log(data.join(' '))
        }
    }
}
