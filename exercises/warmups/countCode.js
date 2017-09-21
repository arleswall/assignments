//Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the "d", so "cope" and "cooe" would also count.

function countCode(str) {
var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "c" && str[i + 1] === "o" && str[i + 3] === "e") {
           count++;
        }
    }
 return count;
}
console.log(countCode("aaacodehua"));
console.log(countCode("aaacozehua"));
console.log(countCode("aaacoyehua"));