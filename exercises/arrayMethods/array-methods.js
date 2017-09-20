var cars = ["truck", "van", "sedan"];

//.forEach()

//for (var i = 0; i < cars.length; i++) {  
//  console.log(cars[i] + " goes vroom");
//}

cars.forEach(function (carros) {
    console.log(carros + " goes vroom");
})

//.map()

var angryCars = [];

//for (var i = 0; i < cars.length; i++) {  
//  angryCars.push(cars[i].toUpperCase());
//}
//
var angryCars = cars.map(function (cars) {
    return cars.toUpperCase()
})

console.log(angryCars);

//.filter()

var cars = [
    {
        make: "Ford",
        model: "E150",
        price: 10000,
        year: 2010
    },
    {
        make: "Chevy",
        model: "Camaro",
        price: 20010,
        year: 2001
    },
    {
        make: "Toyota",
        model: "Tacoma",
        price: 30900,
        year: 2006
    },
    {
        make: "Ford",
        model: "Explorer",
        price: 9000,
        year: 2003
    },
    {
        make: "Ford",
        model: "F250",
        price: 2400,
        year: 2015
    },
]

var newCars = [];

//for (var i = 0; i < cars.length; i++) {  
//  if (cars[i].year > 2005){
//    newCars.push(cars[i]);
//  }
//}
//
//console.log(newCars);

var newCars = cars.filter(function (car) {
    return car.year > 2005
})

console.log(newCars);

//.find()

//for (var i = 0; i < cars.length; i++) {  
//  if (cars[i].model === "E150"){
//    var coolVan = cars[i];
//    break;
//  }
//}
//console.log(coolVan);

var searchCars = cars.find(function (car) {
    return car.model === "E150"
})

console.log(searchCars);

//.some()

//for (var i = 0; i < cars.length; i++) {  
//  if (cars[i].model === "E150"){
//    console.log("There is one or more E150s");
//    break;
//  }
//}

var someCars = cars.some(function (car) {
    if (car.model === "E150")
        console.log("There is one or mode E150s");
})

//.every()

//for (var i = 0; i < cars.length; i++) {  
//  if (cars[i].make != "E150"){
//    console.log("It is false that every car is an E150");
//    break;
//  }
//}

var everyCar = cars.every(function (car) {
    if (car.model === "E150")
        console.log("It is false that every car is an E150")
})


