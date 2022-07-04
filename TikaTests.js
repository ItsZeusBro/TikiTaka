import { TikaTest } from "./TikaTest/TikaTest"
import { TikaPrimsTest } from "./TikaTest/TikaPrimsTest"
import { TikaInterfaceTest } from "./TikaTest/TikaInterfaceTest"

class TikaTests{
    constructor(){
        this.tt = new TikaTest(process.argv, true)
        this.ttpt = new TikaPrimsTest()
        this.tit = new TikaInterfaceTest()
    }
}
