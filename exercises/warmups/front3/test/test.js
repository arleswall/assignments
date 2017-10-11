var chai = require("chai");
var assert = chai.assert;

var strNum = require("../strNum.js");


describe("strNum function", function () {

            it("return 3 first characters of str num times", function () {

                assert.equal(strNum("testing", 3), "testestes");
                assert.equal(strNum("te", 3), "tetete");
                assert.equal(strNum("!!!", 1), "!!!");
            });

});
