import { TikiTakaPrimsTest } from './TikiTakaPrims/TikiTakaPrimsTest.js';

class TikiTakaTest{
    constructor(flags){
        this.verbose=null
        flags.forEach(element => {
            if (element=='--verbose'){
                this.verbose=true
            }
        });
        this.ttpt = new TikiTakaPrimsTest(process.argv.slice(2))
        this.ttit = new TikiTakaInterfaceTest(process.argv.slice(2))
    }
}
