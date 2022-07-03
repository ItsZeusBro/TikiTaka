# Node Assertions
## All values are "truthy" except: 
- false, 0, -0, 0n, "", null, undefined, and NaN
    - For example, these values all evaluate to true in a boolean context: 
        - true, {}, [], 42, "0", "false", new Date(), -42, 12n, 3.14, -3.14, Infinity, -Infinity

- If the first object is truthy in a boolean AND, then it will return the second
    - true && "dog" (returns "dog")


## node assert library functions
### assert.fail([message]) 
(USE THIS FOR REPORTING WHAT HAPPENED IN THE EVENT YOU HAVE YOUR OWN ASSERTIONS NOT SHOWN HERE)
- Throws an AssertionError with the provided error message or a default error message. 

- Everything else uses a message to throw an AssertionError if the assertion fails
    
### assert.value(value[, message]) 
- same as assert.ok(value[, message])  
- same as assert.equal(!!value, true, message)                  
    - asserts that a value is truthy ()

### assert.notEqual(actual, expected[, message])        
- asserts that two objects do not share shallow equality

### assert.deepEqual(actual, expected[, message])       
- asserts that two objects share deep equality using shallow equality on child objects

### assert.notDeepEqual(actual, expected[, message])    
- asserts that two objects do not share deep equality

### assert.match(string, regexp[, message])
- Expects the string input to match the regular expression.

### assert.doesNotMatch(string, regexp[, message])
- Expects the regular expression to not match anything in the string 

### assert.ifError(value)
- if value has a value (anything other than null or undefined), this throws a value.
- This is useful when testing the error argument in callbacks.
    - Examples:
    - assert.ifError(null); //doesn't do anything
    - assert.ifError(undefined); //doesn't do anything
    - assert.ifError('error or whatever else'); 
        // Throws: AssertionError [ERR_ASSERTION] ifError got unwanted exception: "error or whatever else"

### assert.rejects(asyncFn[. error][, message])
- Awaits the asyncFn promise or, if asyncFn is a function, immediately calls the function and awaits the returned promise to complete. It will then check that the promise is rejected.

### assert.doesNotReject(asyncFn[, error][, message])
- Awaits the asyncFn promise or, if asyncFn is a function, immediately calls the function and awaits the returned promise to complete. It will then check that the promise is not rejected.

### assert.throws(fn[, error][, message])
- Expects the function fn to throw an error.

### assert.doesNotThrow(fn[, error][, message])
- Expects that the function fn does not throw an error.