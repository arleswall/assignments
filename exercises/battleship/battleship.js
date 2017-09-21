var readline = require ("readline-sync");

function Location(isShip, hit, display, ship) {
    this.isShip = isShipHere,
    this.hit = hitMiss,
    this.display = "~",
    this.ship = gridArray[[i]];
}


var gridArray = []

function size(columns) {

for (var i = 0; i < columns; i++) {
    var line = []
    for (var x = 0; x < columns; x++) {
        line.push(0);
    }
       gridArray.push(line);
}
    return gridArray;
}
var grid = size(10);

console.log(gridArray);


var x = parseInt(readline.question("Enter x: ")) - 1;
var y = parseInt(readline.question("Enter y: ")) - 1;

grid[y][x] = Location.display;

console.log(grid);


var randomGen = function() {
    return Math.floor(Math.random() * (6));
}

if (randomGen === 1) {
   return Location.isShip === true
}

if (Location.isShip === true) {
    return Location.hit === true  
}

