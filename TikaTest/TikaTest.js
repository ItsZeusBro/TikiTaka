import { TikaPrims } from "../TikaPrims/TikaPrims.js"
import { Comet } from "../Comet/Comet.js"

export class TikaTest extends Comet{
    constructor(){
        super()
        this.tp = new TikaPrims()
        process.on('uncaughtException', err => {
            this.comet('There was an uncaught error\n'+err);
            process.exit(1); // mandatory (as per the Node.js docs)
        });
    }
    clean(dir){
        this.comet('cleaning test dirs')
        this.tp.del(dir)
    }
    prepare(dir){
        this.comet('preparing test dirs')
        this.clean(dir)
        this.tp.mkdr(dir)
    }
}