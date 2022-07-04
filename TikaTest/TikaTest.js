import { TikaPrims } from "../TikaPrims/TikaPrims.js"

export class TikaTest{
    constructor(logFile, verbose, comnt){
        this.tp = new TikaPrims()
        process.on('uncaughtException', err => {
            this.comnt('There was an uncaught error\n'+err);
            process.exit(1); // mandatory (as per the Node.js docs)
        });
    }
    
    clean(dir){
        this.tp.del(true, dir)
    }
    prepare(dir){
        this.clean(dir)
        this.tp.mkdr(dir)
    }
}