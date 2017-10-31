let input = "Pickle Rick!"

function disemvoweling(str){
let output = {
  str: "",
  vowels:""
}
let vowels = "aeiou";
for(let i =0; i <str.length; i++){
  if (vowels.includes(str[i])){
    output.vowels += str[i];
  } else if (str[i].match(/\s/)){
    continue;
  } else {
    output.str += str[i]
  }
}
return output;
}

//OR
function disemvowel(str){
  newObj = {}
  const noVowels = str.replace(/[aeiou\s/]/gi,'');
  const vowels = str.replace(/[^aeiou]/gi, '');
  newObj.str = noVowels.toLowerCase();
  newObj.vowels = vowels.toLowerCase();
  return newObj
}

disemvowel("Pickle Rick!")


console.log(disemvoweling(input))
console.log(disemvowel(input))