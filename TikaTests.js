import { TikaTest } from "./TikaTest/TikaTest.js"
import { TikaPrimsTest } from "./TikaTest/TikaPrimsTest/TikaPrimsTest.js"
import { TikaInterfaceTest } from "./TikaTest/TikaInterface/TikaInterfaceTest.js"
import process from 'node:process';
import { TikaPrims } from "./TikaPrims/TikaPrims.js";
import {Comet} from "./Comet/Comet.js"
class TikaTests extends Comet {
    constructor(){
        super()
        this.comet("hello?")
        this.tt = new TikaTest() 
        this.ttpt = new TikaPrimsTest()
        this.tit = new TikaInterfaceTest()
    }
}

new TikaTests()