var timeleft = document.getElementById("time");

var time = 20


myVar = setInterval(changetime, 1000)

function changetime() {
    time--;
    timeleft.innerHTML = time;
    if (time === 0) {
        clearInterval(myVar);
    }
}


setTimeout(function(){
    document.getElementById("countdown").innerHTML = "Boooom!!";
    document.getElementById("box").style.backgroundImage = "url(850.jpg)";
    document.getElementById("countdown").style.color = "white";
}, 20000);