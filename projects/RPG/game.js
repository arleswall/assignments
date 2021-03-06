var readline = require("readline-sync");

console.log("Welcome to Animal Attack! Please select your character:")

var players = [

    {
        name: "Grizz - The Bear",
        speed: 1,
        power: 3
},

    {
        name: "Ringo - The Raccoon",
        speed: 2,
        power: 2
},

    {
        name: "Chipper - The Squirrel",
        speed: 3,
        power: 1
}
]



var characters = [players[0].name, players[1].name, players[2].name];

var character = readline.keyInSelect(characters);

console.log("Hello " + characters[character] + "!! You seem hungry! Let's go find some food! You can go to the places below or check your stash.");


var health = 100;
var XP = 0;
var items = [];
var exit = false;

while (health > 0 && exit !== true) {
    walk();



}

function walk() {
    var options = ["Suburbs", "National Park", "Forest", "Check Stash"];
    var option = readline.keyInSelect(options, "Where would you like to go? ");
    if (option === 0) {
        suburbs();
    } else if (option === 1) {
        natPark();
    } else if (option === 2) {
        forest();
    } else if (option === 3) {
        checkInventory();
    } else {
        exit();
    }
}


function checkInventory() {
    if (items.length === 0) {
        console.log("\nSorry you have nothing in your stash. Keep on searching...");
    } else {
        //            console.log(items);
        console.log("\nYour stash is looking good! You already have: " + items + ".");
        var useItem = readline.keyInSelect(items, "Would you like to eat any of these treats and recover your health?");
        if (useItem >= 0) {
            items.splice(useItem, 1);
            health += 25;
            console.log(health);
        }
    }
}


function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function suburbs() {
    if (randomNum(1, 4) === 1) {
        return console.log("\nSweeet! You've found an yummy Apple Pie"), items.push("Apple Pie"), walk();
    } else {
        return console.log("\nOh noo you ran into a crazy lady with a broom!"), fight();
    }
}

function natPark() {
    if (randomNum(1, 4) === 1) {
        return console.log("\nAwesome! You've run into some distracted tourists and took their bag of chips!"), items.push("Bag of Chips"), walk();
    } else {
        return console.log("\nShoot! Joey the Park Ranger caught you red handed inspecting trash cans!"), fight();
    }
}

function forest() {
    if (randomNum(1, 4) === 1) {
        return console.log("\nJackpot! You've found a campsite and raid their food!"), items.push("Beef Jerky"), walk();
    } else {
        return console.log("\nRun for the mountains! There's a hunter on your tail!"), fight();
    }
}


function fight() {
    var runQuestion = ["Run", "Fight"]
    var userRun = readline.keyInSelect(runQuestion, "What would you like to do????")
    if (userRun === 0) {
        return run();
    } else {
        return attack();
    }
}

function run() {
    if (randomNum(players[character].speed, 4) === players[character].speed) {
        return console.log("\nWow you're fast! You got away!"), walk();
    } else {
        return console.log("\nOuch! The enemy just kicked your butt"), enemyAttack();
    }
}

function enemyAttack() {
    if (health > 26) {
        return health = health - 25, console.log("Your health now is: " + health);
    } else {
        return (health = health - 25), console.log("Your health is: " + health + " YOU ARE DEAD! Your final score is: " + XP);
    }
}


function attack() {
    if (randomNum(players[character].power, 4) === players[character].power) {
        console.log("\nYou are a WILD animal! You scared the hell out the enemy!");
        enemyRun();
    } else {
        console.log("\nWrong Decision! The enemy dodged your attack and hit you back!"), enemyAttack();
    }
}

function enemyRun() {
    XP += 10;
    console.log("\nCongratulations you just earned 10XP! Your current score is: " + XP);

}

function exit() {
    exit = readline.keyInYN("Would you like to exit this amazing game?")
    if (exit === true) {
        console.log("You gon starve to death you wuss");
    } else if (exit === false) {
        walk();
    } else {
        console.log("You can only press Y or N");
    }
}
