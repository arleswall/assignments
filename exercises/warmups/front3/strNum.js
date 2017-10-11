function strNum (str, num){
let newString = str.slice(0,3);
return newString.repeat(num);
}

console.log(strNum("te", 3));


module.exports = strNum;
