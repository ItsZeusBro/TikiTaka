import { TikaPrims } from "../TikaPrims/TikaPrims.js"

export class TikaTest{
    constructor(flags, root=false){
        this.tp = new TikaPrims()
        this.verbose;
        this.logName;
        this.flags(flags, root)
        this.logName=this.logName+Date.now()
        process.on('uncaughtException', err => {
            this.log('There was an uncaught error', err);
            process.exit(1); // mandatory (as per the Node.js docs)
          });
    }
    flags(flags, root){
        if(root){
            flags.forEach(element => {
                if (element=='--verbose'){
                    this.verbose=true
                }
                if (element=='--log'){
                    this.logName=true
                }
                if (this.logName){
                    this.logName = element
                }
            });
        }
    }

    log(...data){
        this.tp.write(this.logName, data.join())
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