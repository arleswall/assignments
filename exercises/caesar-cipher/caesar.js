var readline = require('readline-sync');  

var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();  

var shift = parseInt(readline.question('How many letters would you like to shift? '));  

var alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"

var newStr = ""

for (var i = 0; i < input.length; i++) {
    if (input[i] === alphabet[i]) {
        newStr += alphabet[i + shift]
    }
}  
    console.log(newStr);
