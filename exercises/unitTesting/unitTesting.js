function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function assert(actual, expected) {
    if (actual !== expected) {
        throw {
            type: "Fail",
            details: {
                actual: actual,
                expected: expected
            }
        };
    } else {
        console.log("test passed");
    }
}

function describe(message, testFunc) {
    try {
        testFunc();
    } catch (err) {
        console.log("Failed: ", err)
    }
}


describe("testing add", function(){
    assert(add(2, 4), (6));
    assert(add(-1, -3), (-4));
})

describe("testing sub", function(){
    assert(sub(2, 4), (-2));
    assert(sub(-1, -3), (2));
})

describe("testing multiply", function(){
    assert(multiply(2, 4), (8));
    assert(multiply(-1, -3), (3));
})

describe("testing divide", function(){
    assert(divide(2, 4), (0.5));
    assert(divide(-2, -4), (0.5));
})