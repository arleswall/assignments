array=["this", "is", "an", "array"]

function adjacent(array){
  max = array[0].length + array[1].length + array[2].length;
  for (let i = 0; i < array.length -2; i++){
    if (array[i].length + array[i + 1].length + array[i + 2].length > max){
      max= [array[i], array[i + 1], array[i + 2]]
    }
  }
  return max
}
console.log(adjacent(array));

module.exports = adjacent