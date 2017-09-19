//antiCaps('Hello') // hELLO  
//antiCaps('racEcar') // RACeCAR  
//antiCaps('bAnAnA') // BaNaNa  

//function isCaps(letter) {  
//  return letter === letter.toUpperCase();
//}

function antiCaps(str) {
    var newString = ""
for (var i = 0; 0 < str.length; i++)
    if (str[i] === str[i].toUpperCase()) {
        newString += str[i].toLowerCase;
    } else {
        newString += str[i].toUpperCase;
    }
    return newString
}

console.log(antiCaps("Hello"));
