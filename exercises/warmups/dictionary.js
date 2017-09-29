var readline = require("readline-sync");


var wordResponse = "";
var definitionResponse = "";

var dictionary = {};

while (wordResponse !== "q" || definitionResponse !== "q") {
    console.log(dictionary);
    var wordResponse = readline.question("What word should we look up for the definition? ")

    if (dictionary[wordResponse]) {
        console.log("the definition for " + wordResponse + " is " + dictionary[wordResponse]);
    } else {

        var definitionResponse = readline.question("We dont have that word. Enter a definition for it: ");
        dictionary[wordResponse] = definitionResponse;
    }
}
