//exercise 1

function eachLetter(str) {
    for (var i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}


eachLetter("Arles");

//exercise 2

function findCharacter(str, character) {
    for (var i = 0; i < str.length; i++) {
        if (character === str[i]) {
            console.log(i);
            return i;
        }

    }
    console.log("character not found")
    return;
}

findCharacter("hello there", "r");

//exercise 3

function find42(arr) {
    
    for (var i = 0; i <arr.length; i++) {
        if (arr[i] === 42) {
            console.log("we found 42 at index", i);
            return;
        }
    }
    console.log("didnt find 42");
}

find42 ([1,2,3,4,5,6,7,42,8,9]);
find42 ([1,2,3,4,5,6,7,8]);

//exercise 4

var arr = [12, 34, 45, 67, 4535, 567, 1, -1, 2344958]
function loop4(arr) {
    var smallNum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] <smallNum) {
            smallNum = arr[i];
        }
    }
    console.log(smallNum);
}

loop4(arr);