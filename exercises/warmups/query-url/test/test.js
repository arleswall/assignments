var chai = require("chai");
var assert = chai.assert;

var stringifyUrl = require("../query-url.js");


describe("stringifyUrl func", function () {

            it("return endpoint with querys", function () {

                assert.equal(stringifyUrl("http://localhost:8080/monkeys", {color: "black", species: "howler"}), 
                "http://localhost:8080/monkeys?color=black&species=howler"); 
                
                assert.equal(stringifyUrl("http://localhost:8080/monkeys", {color: "black"}), 
                "http://localhost:8080/monkeys?color=black"); 
                
                assert.equal(stringifyUrl("http://localhost:8080/monkeys", {}), "http://localhost:8080/monkeys");                 

            });

});