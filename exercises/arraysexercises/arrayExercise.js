var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 
 

vegetables.pop()
console.log("vegetables: ", vegetables); 

fruit.shift()
console.log("fruit: ", fruit);  

var index = fruit.indexOf("orange")
console.log (index)

fruit.push(index)
console.log("fruit: ", fruit);

console.log(vegetables.length);

vegetables.push(vegetables.length)
console.log("vegetables: ", vegetables);

var food = fruit.concat(vegetables)
console.log(food);

food.splice(4, 2)
console.log(food);

food.reverse()
console.log(food);

console.log(food.join(" "));

