let A = [1, 2, 3];
let B = [2, 3, 4];

function findDifference(arr1, arr2){
  const combined = [...arr1, ...arr2];
  return combined.filter(item => combined.indexOf(item) === combined.lastIndexOf(item))
}

console.log(findDifference(A, B));


// function uniq(arr1, arr2) {
//     let arr = [...arr1, ...arr2];
//    return Array.from(new Set(arr));
// }
//console.log(uniq(A, B))  // [1, 2, 3, 4]