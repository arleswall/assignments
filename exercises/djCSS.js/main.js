var button = document.getElementById("bark");
var audio = new Audio ("DogWoof.mp3")
button.addEventListener("click", function(){
    audio.play();
});