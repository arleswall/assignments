const chai = require("chai");
const assert = chai.assert;

const maps = require("../map.js");

describe("Map Exercise 1", () => {

  it("should returnm an array of doubles", () => {

    assert.deepEqual(maps.doubleNumbers([1]), [2]);
    assert.deepEqual(maps.doubleNumbers([-1]), [-2]);
  });
});
describe("Map Exercise 2", () => {

  it("should returnm an array of strings", () => {

    assert.deepEqual(maps.stringItUp([1]), ["1"]);
    assert.deepEqual(maps.stringItUp([-1]), ["-1"]);
  });
});
