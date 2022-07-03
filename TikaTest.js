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


//all values are "truthy" except: 
//         false, 0, -0, 0n, "", null, undefined, and NaN
//For example, these values all evaluate to true in a boolean context: 
//         true, {}, [], 42, "0", "false", new Date(), -42, 12n, 3.14, -3.14, Infinity, -Infinity

//if the first object is truthy in a boolean AND, then it will return the second
//true && "dog"
    // returns "dog"


//node assert library functions
    // assert.fail([message]) (USE THIS FOR REPORTING WHAT HAPPENED 
    //                        IN THE EVENT YOU HAVE YOUR OWN ASSERTIONS 
    //                        NOT SHOWN HERE)
        // Throws an AssertionError with the provided error message or a default error message. 

    // assert.value(value[, message]) 
    //      same as assert.ok(value[, message])  
    //      same as assert.equal(!!value, true, message)                  
    //          asserts that a value is truthy ()

    // assert.notEqual(actual, expected[, message])        
    //      assterts that two objects do not share shallow equality

    // assert.deepEqual(actual, expected[, message])       
    //      asserts that two objects share deep equality using shallow equality on child objects

    // assert.notDeepEqual(actual, expected[, message])    
    //      asserts that two objects do not share deep equality


    // assert.match(string, regexp[, message])

    // assert.doesNotMatch(string, regexp[, message])

    // assert.ifError(value)



    // assert.rejects(asyncFn[. error][, message])

    //assert.doesNotReject(asyncFn[, error][, message])

    // assert.throws(fn[, error][, message])

    //assert.doesNotThrow(fn[, error][, message])