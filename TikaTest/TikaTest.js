import { TikTak } from "../TikTak/TikTak.js"
import { Comet } from "../Comet/Comet.js"

export class TikaTest extends Comet{
    constructor(){
        super()
        this.tk = new TikTak()
        process.on('uncaughtException', err => {
            this.comet('There was an uncaught error\n'+err);
            process.exit(1); // mandatory (as per the Node.js docs)
        });
    }
    clean(dir){
        this.comet('cleaning test dirs')
        this.tk.del(dir)
    }
    prepare(dir){
        this.comet('preparing test dirs')
        this.clean(dir)
        this.tk.mkdr(dir)
    }
}