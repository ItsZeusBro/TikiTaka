import { TikaPrims } from "../TikaPrims/TikaPrims.js"

export class TikaTest{
    constructor(logFile, verbose, logit){
        this.tp = new TikaPrims()
        this.verbose=verbose
        this.logit=logit
        this.logFile=logFile
        process.on('uncaughtException', err => {
            this.log('There was an uncaught error\n'+err);
            process.exit(1); // mandatory (as per the Node.js docs)
        });
    }
    comment(...data){
        var obj={}

        obj[this.logFile]=data.join(' ')+'\n'

        if (this.logit){
            this.tp.write(obj)
        }
        if (this.verbose){
            console.log(data)
        }
    }
    clean(dir){
        this.tp.del(true, dir)
    }
    prepare(dir){
        this.clean(dir)
        this.tp.mkdr(dir)
    }
}