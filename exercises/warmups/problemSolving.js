//1. Write a function that takes an array of numbers and returns the largest
//
//2. Write a function that takes an array of words and a character and return an array of each word that has that letter present
//
//3. Write a function that takes a num1 and num2 and returns whether num1 is
//divisible by num2

function largest(arr) {
    var largeNum = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largeNum) {
            largeNum = arr[i];
        }
    }
    console.log(largeNum);
    return largeNum;
}

arr = [2, 3, 4, 11, 8, 1, 4]

largest(arr);

//OR
//
//math.max



//2.

function findWord(arr, letter) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(letter) !== -1)
            newArr.push(arr[i]);
    }
    console.log(newArr);
    return newArr;
}

findWord(["hello", "world", "whats", "good"], "o");




//3.

function divisible(num1, num2) {
    return (num1 % num2 === 0);
}

console.log(divisible(6, 3));