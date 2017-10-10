let multiD = [
  [1, 2, 3],
  ["a", "b", "c"],
  [true, true, true]
]
//returns false (contains more than one data type)

let multiD2 = [
  [true, false, true],
  [false, false, true]
]
//returns true (each data type is a boolean)


function flatten(arr) {

  const result= [].concat(...arr);
  const type = typeof result[0];
  return result.every(item => type === typeof item);
};



console.log(flatten(multiD));
console.log(flatten(multiD2));
