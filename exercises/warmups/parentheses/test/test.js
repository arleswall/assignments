let chai = require("chai");
let assert = chai.assert;

let parentheses = require("../parentheses.js");


describe("parentheses function", function(){
  it("should have the same amount of ('s and )'s'", function(){
    assert.isTrue(parentheses("()()"));
    assert.isTrue(parentheses("(())"));
    assert.isFalse(parentheses("(()))"));
    assert.isFalse(parentheses("(()"));
  });
  it("should not have )'s as the first and ('s as the last character", function(){
    assert.isFalse(parentheses(")()("));
    assert.isFalse(parentheses("())("));
    assert.isFalse(parentheses("())(()"));
  });
});
