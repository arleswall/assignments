var rabbit = {
    name: "Bruno The Rabbit",
    age: 5,
    isHungry: true,
    groceryCart: ["carrots", "alfalfa", "hamster wheel"],
    
    whosTheShopper: function () {
        console.log("My name is" + this.name + " I am " + this.age + " and my grocery cart has " + this.groceryCart);
    }
};

rabbit.whosTheShopper();

function hunger() {
    console.log(rabbit.isHungry);
}

hunger();
