function Country (hasArmy, population, flagColors) {
    this.hasArmy = hasArmy;
    this.population = population;
    this.flagColors = flagColors;
    this.isEstablished = true;
}

Country.prototype.attack = function(country) {
    console.log(country + "just got attaked")
}

var spain = new Country(true, 46560000, ["red", "gold"]);
spain.attack("Portugal");


//ES6

class Country {
    constructor(hasArmy, population, flagColors, isEstablished=true) {
    this.hasArmy = hasArmy;
    this.population = population;
    this.flagColors = flagColors;
    this.isEstablished = isEstablished;  
    }
    
    attack(country){
        console.log(`${country} just got attacked`)
    }
}

let spain = new Country(true, 46560000, ["red", "gold"], false);
spain.attack("France");