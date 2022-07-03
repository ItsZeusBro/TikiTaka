import { TikaPrimsTest } from './TikaPrims/TikaPrimsTest.js';
import { TikaInterfaceTest } from './TikaInterface/TikaInterfaceTest.js';

//use assert library functions

// assert.value(value[, message])
// assert.deepEqual(actual, expected[, message])       This does a deep comparison on objects checking the children's 
//                                                     equality to the other objects children
// assert.equal(actual, expected[, message])           This does a shallow equality comparison on objects, does not check children
// assert.notDeepEqual(actual, expected[, message])    
// assert.notEqual(actual, expected[, message])

// assert.match(string, regexp[, message])
// assert.doesNotMatch(string, regexp[, message])


// assert.ifError(value)

// assert.ok(value[, message])
// assert.fail([message])

// assert.rejects(asyncFn[. error][, message])
//assert.doesNotReject(asyncFn[, error][, message])

// assert.throws(fn[, error][, message])
//assert.doesNotThrow(fn[, error][, message])


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