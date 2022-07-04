import { TikaPrims } from "../TikaPrims/TikaPrims.js"

export class TikaTest{
    constructor(logDir, logName, verbose, logit){
        this.tp = new TikaPrims()
        this.verbose=verbose
        this.logit=logit
        this.logFile=logDir+logName+Date.now()+'.log'
        process.on('uncaughtException', err => {
            this.log('There was an uncaught error\n'+err);
            process.exit(1); // mandatory (as per the Node.js docs)
        });


    }


    log(data){
        var obj={}
        obj[this.logFile]=data+'\n'
        if (this.logit){
            this.tp.write(obj)
        }
        if (this.verbose){
            console.log(data)
        }
    }
    cleanSubLog(){

    }
    clean(dir){
        this.tp.del(true, dir)
    }
    prepare(dir){
        this.clean(dir)
        this.tp.mkdr(dir)
    }
    getLog(){

    }

}