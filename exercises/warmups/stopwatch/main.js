var timerid = document.getElementById("timer");

var time = 0;

var audio = new Audio ("beep.mp3");

myVar = setInterval(stopwatch, 1000);
myVar2 = setInterval(beep, 30000);

function stopwatch(){
    time++;
    timerid.innerHTML = time;
}


function beep(){
    audio.play();
}

//var timeleft = document.getElementById("time");
//
//var time = 8
//
//
//myVar = setInterval(changetime, 1000)
//
//function changetime() {
//    time--;
//    timeleft.innerHTML = time;
//    if (time === 0) {
//        clearInterval(myVar);
//    }
//}

