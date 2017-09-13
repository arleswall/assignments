 

document.getElementById("calculateAdd").addEventListener("click", function(){
    var sum1 = parseInt(document.getElementById("add1").value);
    var sum2 = parseInt(document.getElementById("add2").value);
    var result = sum1 + sum2;
    document.getElementById("addResult").innerHTML = result;
    
})

document.getElementById("calculateSub").addEventListener("click", function(){
    var subtract1 = parseInt(document.getElementById("sub1").value);
    var subtract2 = parseInt(document.getElementById("sub2").value);
    var result = subtract1 - subtract2;
    document.getElementById("subResult").innerHTML = result;
    
})


document.getElementById("calculateMultiply").addEventListener("click", function(){
    var mult1 = parseInt(document.getElementById("multiply1").value);
    var mult2 = parseInt(document.getElementById("multiply2").value);
    var result = mult1 * mult2;
    document.getElementById("multiplyResult").innerHTML = result;
    
})

