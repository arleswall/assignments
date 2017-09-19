var readline = require ("readline-sync");

function add (a, b) {
    return a + b;
}

function sub (a, b) {
    return a - b;
}

function mul (a, b) {
    return a * b;
}

function div (a, b) {
    return a / b;
}


var num1 = parseInt(readline.question("What's your first number? "));
var num2 = parseInt(readline.question("What's your second number? "));

var operation = readline.question("Please enter the operation to perform ");

function result() {
    if (operation === "add") {
      return add(num1, num2);
    } else if (operation === "sub") {
       return sub(num1, num2);
    } else if (operation === "mul") {
       return mul(num1, num2);
        } else {
           return div(num1, num2);
        }
}

console.log("the result is " + result());