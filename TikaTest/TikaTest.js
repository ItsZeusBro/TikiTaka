import { TikaPrims } from "../TikaPrims/TikaPrims.js"

export class TikaTest{
    constructor(flags, root=false){
        this.tp = new TikaPrims()
        this.tests='./tests/'
        this.verbose;
        this.log;
        if(root){
            flags.forEach(element => {
                if (element=='--verbose'){
                    this.verbose=true
                }
                if (element=='--log'){
                    this.log=true
                }
                if (this.log){
                    this.log = element
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
    clean(){
        this.tp.del(true, this.tests)
    }
    prepare(){
        this.clean()
        this.tp.mkdr(this.tests)
    }
    logStream(){
        var f_name=this.export_to+Date.now()
        return fs.createWriteStream(f_name,{ flags: 'a' })  
    }
}