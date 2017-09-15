var alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "!", "@", "$", "%", "^", "&", "*", "<", ">"];

function randomGenerator(num) {
    var passArray = [];
    for (var i = 0; i < num; i++) {
        passArray.push(alphaArray[Math.floor(Math.random() * alphaArray.length)]);
    }
    return passArray.join("");
}

console.log(randomGenerator(8));


//OR

function generatePassword(num) {
       var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0; i < num; ++i) {
        retVal += characters.charAt(Math.floor(Math.random() * characters.length)); //retVal += Works like .push for array. retVal = retVal + charac...
    }
    console.log(retVal);
}

generatePassword(20);


