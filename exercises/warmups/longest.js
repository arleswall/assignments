var string = "the quick brown fox jumped over the lazy dog"

//find longest word in a string

function longestWord(myString){
  var longest = 0
  var word = "";
var array = myString.split(" ")
for (var i = 0; i < array.length; i++) {
  if (array[i].length > longest ) {
    longest = array[i].length
    word = array[i]
  }
}
return word
}

longestWord(string)

//remove the number passed as an argument

function remove(array, x) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === x){
      array.splice(array.indexOf(array[i]), 1)
    }
  }
  return array
}
remove([1, 3, 6, 2, 3], 3)