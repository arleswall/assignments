var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function print(array) {
    console.log(array.join(" "));
}
//print(lyrics);


function print(array) {
    console.log(array.reverse().join(" "));
}
//print(lyrics);

function everyOther (arr) {
    var everyOtherLyric = [];
    
    for (var i = 0; i < arr.length; i+= 2) {
        everyOtherLyric.push(arr[i]);   
}
    console.log(everyOtherLyric.join(" "));
}
everyOther(lyrics);