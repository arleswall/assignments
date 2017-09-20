function getFrequency(string) {
    var freq = {};
    for (var i = 0; i < string.length; i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
    console.log(freq);
    return freq;
};


getFrequency("testing this test");

//OR

function count(string) {  
  var count = {};
  string.split('').forEach(function(letter) {
     if (count[letter]) {
         count[letter]++;
     } else {
         count[letter] = 1;
     }
  });
    
    console.log(count);
    console.log(Object.keys(count).join(""));
  return count;
}

count("testing this test");


console.log(Object.keys(count).join("")); //DUPLICATES