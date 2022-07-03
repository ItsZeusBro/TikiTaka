import { TikaPrimsTest } from './TikaPrims/TikaPrimsTest.js';
import { TikaInterfaceTest } from './TikaInterface/TikaInterfaceTest.js';

class TikaTest{
    constructor(flags){
        this.verbose=null
        this.log = null;
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
        this.ttpt = new TikaPrimsTest(this.verbose, this.log)
        this.ttit = new TikaInterfaceTest(this.verbose, this.log)
    }
}

var tt = new TikaTest(process.argv)
