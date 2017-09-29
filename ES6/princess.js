var readline = require("readline-sync");



    

class Princess {
    constructor(name, totalCoins, status, star, gameActive) {
        this.name = name
        this.totalCoins = 0;
        this.status = "Small"
        this.star = false;
        this.gameActive = true;
    }
    setName(namePicked){
     this.name = namePicked;
        letsPlay();
    }
    
    gotHit() {
       if(this.status === "Small") {
           this.status = "Dead";
           console.log("You are DEAD");
           this.gameActive === false;
       } else if (this.status === "Powered Up"){
         this.status = "Big";     
       } else {
           this.status = "Small"
       }
    }
    
    gotPowerup() {
        if(this.status === "Small"){
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up"
        } else {
            this.status = "Powered Up"
        }
    }
    
    addCoin(){
        if(randomNum === 2) {
            totalCoins++;
        }
    }
    
    print(){
     console.log(mario);   
    }
    
}
 const mario = new Princess("Mario", 0, "Small", false, true);
const luigi = new Princess("Luigi", 0, "Small", false, true)  



while (mario.gameActive === true || luigi.gameActive === true) {
 
    
 
      
var character = readline.question("Who would you like to play with: Mario or Luigi?");
    setName(character);
    
 
      
    
function letsPlay() {   
 if (randomNum === 0) {
     gotHit();
 }   else if (randomNum === 1) {
     gotPowerup();
 } else {
     addCoins();
 }
}
    


 
}

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
