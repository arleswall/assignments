var readline = require("readline-sync");

console.log("You have 3 options: ")
console.log("1. Put hand in hole ")
console.log("2. Find the key ")
console.log("3. Open the door ")



while (whatToDo !==1 && oneMoreStep !==1 && oneMoreStep !== 3) {

var whatToDo = parseInt(readline.question("What would you like to do? "));
    
if (whatToDo === 1) {
    console.log("You're dead. GAME OVER");
} else if (whatToDo === 2) {
    var oneMoreStep = parseInt(readline.question("You've found the key! What would you life to do now?"));
} else {
    console.log("Sorry, you need a key first");
    whatToDo;
}



if (oneMoreStep === 3) {
    console.log("Congratulations! You're free to go!");
} else if (oneMoreStep === 1) {
    console.log("You're dead. GAME OVER");
} else if (oneMoreStep === 2)
    console.log("You already have the key!");
    oneMoreStep;
}