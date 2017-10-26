const add = require("./add");
const sub = require("./sub");
const divide = require("./divide");
const multiply = require("./multiply");
const expo = require("./exponentiation");
const calculator = require("./calculator");

console.log(add(2, 3))
console.log(sub(4, 3))
console.log(divide(4, 2))
console.log(multiply(2, 3))
console.log(expo(2, 3))
console.log(calculator(2, 3, "add"))
console.log(calculator(2, 3, "sub"))
console.log(calculator(6, 3, "divide"))
console.log(calculator(2, 3, "multiply"))
console.log(calculator(2, 3, "expo"))