import {TikaInterface} from "../../TikaInterface/TikaInterface.js"
import { TikaTest } from "../TikaTest.js"

//This basically runs tests on every module
export class TikaInterfaceTest extends TikaTest{
    constructor(logDir, logName, verbose, logit){
        super(logDir, logName, verbose, logit)
        this.ti = new TikaInterface()
        this.log("sometest from TikaInterfaceTest")
    }
    
}