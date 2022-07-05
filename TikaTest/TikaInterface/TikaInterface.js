import {TikaInterface} from "../../TikaInterface/TikaInterface.js"
import { TikaTest } from "../TikaTest.js"

//This basically runs tests on every module
export class TikaInterfaceTest extends TikaTest{
    constructor(){
        super()
        this.ti = new TikaInterface()
        this.comet("sometest from TikaInterfaceTest")
    }
    
}