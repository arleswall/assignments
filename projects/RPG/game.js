var readline = require("readline-sync");

console.log("Welcome to Animal Attack! Please select your character:")

var characters = ["Bear", "Raccoon", "Squirrel"]
var character = readline.keyInSelect(characters);

console.log("Hello " + characters[character] + "!! You seem hungry! Let's go find some food!")

var health = 100
var items = [];

while (health > 0 || exit !== true) {
    walk();

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
        if (items === []) {
        console.log("Sorry you have nothing in your stash. Keep on searching...");
    } else {
        console.log(items);
    }
}

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function suburbs() {
        if (randomNum(1, 3) === 1) {
            return console.log("Oh noo you ran into a crazy lady with a broom!"),fight();
        } else {
            return console.log("Sweeet! You've found an yummy Apple Pie"), items.push("Apple Pie"), walk();
        }
    }
    function natPark() {
        if (randomNum(1, 3) === 1) {
            return console.log("Shoot! Joey the Park Ranger caught red handed!"), fight();
        } else {
            return console.log("Awesome! You've run into some distracted tourists and took their bag of chips!"), items.push("Bag of Chips"), walk();
        }
    }
    function forest() {
        if (randomNum(1, 3) === 1) {
            return console.log("Run for the mountains! There's a hunter on your tail!"), fight();
        } else {
            return console.log("Jackpot! You've found a campsite and raid their food!"), items.push("Beef Jerky"), walk();
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
        if (randomNum(1, 2) === 1) {
            return console.log("Wow you're fast! You got away!"), walk();
        } else {
            return console.log("Ouch! The enemy just kicked your butt"), enemyAttack();
        }
    }

    function enemyAttack() {
        if (health > 26) {
            return health = health - 25, console.log("Your health now is: " + health);
        } else {
            return (health = health - 25), console.log("Your health is: " + health + " YOU ARE DEAD!");
        }
    }


function attack(){
    if(randomNum(1, 2) === 1) {
        console.log("You are a WILD animal! You scared the hell out the enemy!")// enemyRun();
    } else {
        console.log("Wrong Decision! The enemy dodged your attack and hit you back!"), enemyAttack();
    }
}
    
    function exit() {
   var exit = readline.keyInYN("Would you like to exit this amazing game?")
   if (exit === true) {
      console.log("You gon starve to death you wuss");
   } else if (exit === false) {
       walk();
   } else {
       console.log("You can only press Y or N");
   }
}

    
//    function enemyRun() {
//        items.push()
//    }
//    

} //while close

//
//function whatHappenOnOurWalk(){
//    console.log("walk");
//}
//
//function checkInventory(){
//    console.log(inventory);
//}
//
//while(true){
//    walk();
//}
//
////ask user for name and give greeting
//
//var walk = readline.
//
//function walk(){  
//   //ask user to push "w" to walk
//    if (user pushed w){
//        if(1 in 4){
//            fight();
//        } else {
//            //tell user they didn't run into a monster
//            //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
//        }
//    } else {
//        //tell user what's in their inventory, and their health, and then tell them to push w to walk
//}
//
//function run(){  
//    if(1 in 2){
//        //tell user that they successfully got away and can continue walking
//        //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
//    } else {
//        //tell user they were not able to run
//        //****THIS PART IS IMPORTANT. DO NOT CALL fight() You could, however, call one of the attack functions****
//}
//
//function fight(){  
//    ask user to either fight or run
//    enemyCreation()
//    if (user is trying to run){
//        run()
//    } else {
//        attackEnemy
//    }
//}
