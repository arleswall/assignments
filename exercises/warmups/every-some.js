function every(arr, f){
  for (let i =0; i < arr.length; i++){
  if(!f(arr[i])) {
    return false
  }
  }
  return true
}
function some(arr, f){
  for (let i =0; i < arr.length; i++){
  if(f(arr[i])) {
    return true
  }
  }
  return false
}

test = [1, 2, 3, 4, 5, 6, 7, 8]

function callback(num){
  return typeof num === "number";
}

console.log(every(test, callback));