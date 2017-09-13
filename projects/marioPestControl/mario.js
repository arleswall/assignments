var goombaCost = parseInt(document.getElementById("goombaUnitCost").innerHTML);


document.getElementById("input1").addEventListener("input", function () {
    var goombaAmount = parseInt(document.getElementById("input1").value);
    var totalGoomba = goombaAmount * goombaCost;
    document.getElementById("totalIndividual1").innerHTML = totalGoomba;
    
} );


var bobCost = parseInt(document.getElementById("bobUnitCost").innerHTML);


document.getElementById("input2").addEventListener("input", function(){
    var bobAmount = parseInt(document.getElementById("input2").value);
    var totalBob = bobAmount * bobCost;
    document.getElementById("totalIndividual2").innerHTML = totalBob;
    
});


var cheepCost = parseInt(document.getElementById("cheepUnitCost").innerHTML);


document.getElementById("input3").addEventListener("input", function(){
    var cheepAmount = parseInt(document.getElementById("input3").value);
    var totalCheep = cheepAmount * cheepCost;
    document.getElementById("totalIndividual3").innerHTML = totalCheep;
    
});


document.getElementById("calculate").addEventListener("click", function(){
var goombaAmount = parseInt(document.getElementById("input1").value);
var totalGoomba = goombaAmount * goombaCost; 
    var bobAmount = parseInt(document.getElementById("input2").value);
    var totalBob = bobAmount * bobCost;
        var cheepAmount = parseInt(document.getElementById("input3").value);
        var totalCheep = cheepAmount * cheepCost;
var totalAllCombined = totalGoomba + totalBob + totalCheep;
document.getElementById("totalPrice").innerHTML = totalAllCombined;

})