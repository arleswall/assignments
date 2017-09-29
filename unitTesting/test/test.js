var chai = require("chai");
var assert = chai.assert;

var lastNums = require("../lastNums.js");


describe("lastNum func", function () {

            it("return true for equal last index", function () {

                assert.isTrue(lastNums(12, 402), true); 
                assert.isTrue(lastNums(11, 402), false); 
                assert.isTrue(lastNums(0, 0), true); 
                assert.isTrue(lastNums(-11, 11), true); 

            });

});