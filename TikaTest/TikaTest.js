import { TikaPrims } from "../TikaPrims/TikaPrims.js"

export class TikaTest{
    constructor(flags, root=false){
        this.tp = new TikaPrims()
        this.verbose;
        this.logName;
        process.on('uncaughtException', err => {
            this.log('There was an uncaught error', err);
            process.exit(1); // mandatory (as per the Node.js docs)
          });
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
        this.logName=this.logName+Date.now()
    }

    log(...data){
        console.log(this.logName, data.join())
        //this.tp.write(this.logName, data.join())
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