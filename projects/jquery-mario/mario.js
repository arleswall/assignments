var goombaCost = parseInt($("#goombaUnitCost").html());


$("#input1").on("input", function () {
    var goombaAmount = parseInt($("#input1").val());
    var totalGoomba = goombaAmount * goombaCost;
    $("#totalIndividual1").html(totalGoomba);
    
} );


var bobCost = parseInt($("#bobUnitCost").html());


$("#input2").on("input", function(){
    var bobAmount = parseInt($("#input2").val());
    var totalBob = bobAmount * bobCost;
    $("#totalIndividual2").html(totalBob);
    
});


var cheepCost = parseInt($("#cheepUnitCost").html());


$("#input3").on("input", function(){
    var cheepAmount = parseInt($("#input3").val());
    var totalCheep = cheepAmount * cheepCost;
    $("#totalIndividual3").html(totalCheep);
    
});


$("#calculate").on("click", function(){
var goombaAmount = parseInt($("#input1").val());
var totalGoomba = goombaAmount * goombaCost; 
    var bobAmount = parseInt($("#input2").val());
    var totalBob = bobAmount * bobCost;
        var cheepAmount = parseInt($("#input3").val());
        var totalCheep = cheepAmount * cheepCost;
var totalAllCombined = totalGoomba + totalBob + totalCheep;
$("#totalPrice").html(totalAllCombined);

});

