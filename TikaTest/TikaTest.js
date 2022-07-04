import { TikaPrims } from "../TikaPrims/TikaPrims.js"

export class TikaTest{
    constructor(flags, root=false){
        this.tp = new TikaPrims()
        this.verbose;
        this.logName;
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
    log(){
        //logs should be set up here
        //may have to spin up child process to use this
        if(this.export_to){
            this.logStrm = this.logStream()
            process.stdout.pipe(this.logStrm)
            process.stderr.pipe(this.logStrm)
            process.on('close', data => {
                console.log(data);
              });
        }
    }
    clean(dir){
        this.tp.del(true, dir)
    }
    prepare(dir){
        this.clean(dir)
        this.tp.mkdr(dir)
    }
    logStream(){
        var f_name=this.logName+Date.now()
        return fs.createWriteStream(f_name,{ flags: 'a' })  
    }
}