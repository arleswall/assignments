// function parentheses(str){
//   if (str.charAt(0) === ")" || str.charAt(str.length - 1) === "("){
//     return false
//   } else if (str.split("(").length === str.split(")").length){
//     return true
//   } else {
//     return false
//   }
// }

function parentheses(str){
  let count = 0;
  for(let i =0; i<str.length; i++){
    if (str[i] === "(") {
      count++;
    } else if (str[i] === ")") {
      count--;
     if (count < 0) {
      return false;
    }
  }
}
return count === 0;
}

module.exports = parentheses