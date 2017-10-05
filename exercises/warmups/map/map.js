// 1) Make an array of numbers that are doubles the the first array

// function doubleNumbers(arr){
// return arr.map(function(mult){
//   return mult * 2
// })
// }

function doubleNumbers(arr) {
  return arr.map(num => num * 2)
}


console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// 2) Take an array of numbers and make them strings

// function stringItUp(arr){
// return arr.map(function(str){
//   return str.toString()
// })
// }
function stringItUp(arr) {
  return arr.map(num => num.toString())
}


console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


// 3) Make an array of strings of the names

// function nameOnly(arr){
// return arr.map(function(names){
//   return names.name.toString()
// })
// }

function nameOnly(arr) {
  return arr.map(obj => obj.name)
}

console.log(nameOnly([{
  name: "Angelina Jolie",
  age: 80
}, {
  name: "Eric Jones",
  age: 2
}, {
  name: "Paris Hilton",
  age: 5
}, {
  name: "Kayne West",
  age: 16
}, {
  name: "Bob Ziroll",
  age: 100
}]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// 4) Make an array of strings of the names saying whether or not they can go to The Matrix

// function namesOnly(arr){
// return arr.map(function(matrix){
//   if(matrix.age > 21) {
//     console.log(matrix.name + " can go to The Matrix");
//   } else {
//     console.log(matrix.name + " is under age")
//   }
// })
// }

function namesOnly(arr) {
  return arr.map(obj => {
    if (obj.age >= 18) {
      return `${obj.name} can go to the Matrix`;
    } else {
      return `${obj.name} is under age!!`;
    }
  })
};


console.log(namesOnly([{
  name: "Angelina Jolie",
  age: 80
}, {
  name: "Eric Jones",
  age: 2
}, {
  name: "Paris Hilton",
  age: 5
}, {
  name: "Kayne West",
  age: 16
}, {
  name: "Bob Ziroll",
  age: 100
}]));


// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]



// 5) Make an array of the names in H1s, and the ages in H2s

// function readyToPutInTheDOM(arr) {
//   return arr.map(function(ready) {
//     console.log("<h1>" + ready.name + "</h1><h2>" + ready.age + "</h2>")
//   })
// }
function readyToPutInTheDOM(arr) {
  return arr.map(obj =>
    `<h1>${obj.name}</h1><h2>${obj.age}</h2>`
  )
}

console.log(readyToPutInTheDOM([{
  name: "Angelina Jolie",
  age: 80
}, {
  name: "Eric Jones",
  age: 2
}, {
  name: "Paris Hilton",
  age: 5
}, {
  name: "Kayne West",
  age: 16
}, {
  name: "Bob Ziroll",
  age: 100
}]));
// ["<h1>Angelina Jolie</h1><h2>80</h2",
// "<h1>Eric Jones</h1><h2>2</h2",
// "<h1>Paris Hilton</h1><h2>5</h2",
// "<h1>Kayne West</h1><h2>16</h2",
// "<h1>Bob Ziroll</h1><h2>100</h2"]
module.exports = {
  doubleNumbers,
  stringItUp
}
