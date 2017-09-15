
var squareColor = document.getElementById("square");

squareColor.addEventListener("mouseover", function() {
    squareColor.style.background = "blue";
  });

squareColor.addEventListener("mousedown", function() {
    squareColor.style.background = "red";
  });

squareColor.addEventListener("mouseup", function(){
    squareColor.style.background = "yellow"
});

squareColor.addEventListener("dblclick", function() {
    squareColor.style.background = "green";
  });

squareColor.addEventListener("mousewheel", function(){
    squareColor.style.background = "orange"
});

document.addEventListener("keydown", function(event){
   if (event.keyCode === 66) {
       squareColor.style.background = "blue"
   }                      
})

document.addEventListener("keydown", function(event){
    if (event.keyCode === 82){
        squareColor.style.background = "red";
    }
})

document.addEventListener("keydown", function(){
    if (event.keyCode === 89 ){
        squareColor.style.background = "yellow"
        }
})

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 71) {
    squareColor.style.background = "green"
    }
})

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 79) {
        squareColor.style.background = "orange"
    }
})