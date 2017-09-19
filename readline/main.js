var readline = require ("readline-sync");

var name = readline.question("What's your name? ");

var age = parseInt(readline.question("Hello " + name + ". How old are you? "));

console.log("hello " + name + ". Next year you'll be " + (age + 1) + " years old.")