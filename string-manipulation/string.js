var readline = require("readline-sync");

var first = readline.question("What's your firsr name? ");
var last = readline.question("How about last name? " );

var characters = first.length + last.length


console.log("Hello " + first.toUpperCase().concat( " " + last.toUpperCase()) + ". Your full name has " + characters + " letters.");

var message = readline.question("Tell me more about you. ")

if (message.length > 20) {
    console.log(message.substring(0, message.length / 2));
}


var chosen = parseInt(readline.question("Where would you like to start retyping? Choose from 0 to " + message.lenght + " " ));
         console.log(message.substring(chosen, message.lenght));