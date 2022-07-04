import { TikaTest } from "./TikaTest/TikaTest.js"
import { TikaPrimsTest } from "./TikaTest/TikaPrimsTest.js"
import { TikaInterfaceTest } from "./TikaTest/TikaInterfaceTest.js"

class TikaTests{
    constructor(){
        this.tt = new TikaTest(process.argv, true)
        this.ttpt = new TikaPrimsTest()
        this.tit = new TikaInterfaceTest()
    }
}
