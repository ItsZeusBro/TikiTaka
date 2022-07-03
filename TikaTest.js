import { TikaPrimsTest } from './TikaPrims/TikaPrimsTest.js';
import { TikaInterfaceTest } from './TikaInterface/TikaInterfaceTest.js';

class TikaTest{
    constructor(flags){
        this.verbose=null
        flags.forEach(element => {
            if (element=='--verbose'){
                this.verbose=true
            }
        });
        console.log(this.verbose)
        this.ttpt = new TikaPrimsTest(this.verbose)
        this.ttit = new TikaInterfaceTest(this.verbose)
    }
}

var tt = new TikaTest(process.argv)


