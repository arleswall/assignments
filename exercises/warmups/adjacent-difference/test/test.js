var chai = require("chai");
var assert = chai.assert;

var adjacent = require("../adjacent.js");


describe("adjacent difference", function () {

            it("return the 3 longest combined length", function () {

                assert.deepEqual(adjacent(["something", "another", "thing", "a"]), ["another", "thing", "somethingelse"]); 
                assert.notDeepEqual(adjacent(["something", "another", "thing", "somethingelse", "a"]), ["something", "another", "somethingelse"]); 

            });

});