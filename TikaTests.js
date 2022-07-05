import { TikaTest } from "./TikaTest/TikaTest.js"
import { TikTakTest } from "./TikaTest/TikTak/TikTak.js"
import { TikaInterfaceTest } from "./TikaTest/TikaInterface/TikaInterface.js"
import { Comet } from "./Comet/Comet.js"

class TikaTests extends Comet {
    constructor(){
        super()
        this.tt = new TikaTest() 
        this.ttpt = new TikTakTest()
        this.tit = new TikaInterfaceTest()
    }
}

new TikaTests()