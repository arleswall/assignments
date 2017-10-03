var chai = require("chai");
var assert = chai.assert;

var validIp = require("../ip.js");


describe("is a valid IP", function () {

            it("should have numbers between 0 and 255", function () {

                assert.isTrue(validIp("172.16.254.1"));
                assert.isTrue(validIp("172.16.254.255"));
                assert.isFalse(validIp("172.16.254.300"));
                assert.isFalse(validIp("172.16.254.-1"));
                

            });
                it("should have 3 periods", function () {

                assert.isTrue(validIp("172.16.254.1"));
                assert.isFalse(validIp("172.16.255"));
                assert.isFalse(validIp("172.16"));

                

            });
                    it("should have only numbers", function () {

                assert.isFalse(validIp("a.b.c.d"));


                

            });
    


});