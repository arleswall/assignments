function isPalindrome(word){
//    var toLower = word.toLowerCase()
//    var noSpace = toLower.replace(/\W/g, "");
//    console.log(noSpace);
//    var letterArray = noSpace.split("");
//    var reversed = letterArray.reverse();
//    var final = reversed.join("");
//    return  word.toLowerCase().replace(/\W/g, "") === final;
    
    return word.toLowerCase().replace(/\W/g, "").split("").reverse().join("") === word.toLowerCase().replace(/\W/g, "")
}

module.exports = isPalindrome;