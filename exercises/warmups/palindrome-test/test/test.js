var chai = require("chai");
var assert = chai.assert;

var isPalindrome = require("../palindrome.js")


describe('Check Palindrome', function() {
    it('should have the same characters forward and backwards', function(){
        assert.equal(isPalindrome("racecar"), true);
    });
    
    it('should not be case sensitive', function() {
        assert.equal(isPalindrome("StarRats"), true);
    });
        it('should ignore spaces', function() {
        assert.equal(isPalindrome("St ar Rats"), true);
    });
        it('should ignore special characters', function() {
        assert.equal(isPalindrome("Star  Rats!!?!!"), true);
    });
})