function findDuplicate(str) {
  var result = "";
  for(var i = 0; i < str.length; i++) {
    if(result.indexOf(str[i]) < 0) {
      result += str[i];
    }
  }
  return console.log(result);
}

findDuplicate("bookkeeper larry");
 