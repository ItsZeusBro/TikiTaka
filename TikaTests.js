import { TikaTest } from "./TikaTest/TikaTest.js"
import { TikaPrimsTest } from "./TikaTest/TikaPrimsTest/TikaPrimsTest.js"
import { TikaInterfaceTest } from "./TikaTest/TikaInterface/TikaInterfaceTest.js"

class TikaTests{
    constructor(){
        //these can all be spawned in their own process
        this.tt = new TikaTest(process.argv, true)
        this.ttpt = new TikaPrimsTest()
        this.tit = new TikaInterfaceTest()
    }
}


var tikaTests = new TikaTests()