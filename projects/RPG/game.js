var readline = require ("readline-sync");

console.log("Welcome to Animal Attack! Please select your character:")

var characters = ["Bear", "Raccoon", "Squirrel"]
var character = readline.keyInSelect(characters);

console.log("Hello" + character + "!!")



var items = [];
walk(); 

function walk(){
    var options = ["Suburbs", "National Park", "Forest"];
    var option = readline.keyInSelect(options, "What would you like to do? ");
    if (option === 0){
        whatHappenOnOurWalk();
    } else {
        checkInventory();
    }
}
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