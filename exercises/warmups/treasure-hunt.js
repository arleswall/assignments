const phrase = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever drinking the right vinegar fanny pack pull minim right chicharrones migas."


//const arr = string.replace(/[^\w\s]/gi, '').split(" ");
//console.log(arr)
//const all = [];
//const repeats = [];
//
//for (var i = 0; i < arr.lenght; i++) {
//    if(all.indexOf(arr[i]) < 0) {
//        all.push(arr[i])
//    } else {
//        repeats.push();
//    }
//}
//console.log(all);
//console.log(repeats);

//function duplicates(str) {
//const arr = str.replace(/[^\w\s]/gi, '').split(" ");
//const repeats = []
//arr.reduce(function(prev, curr){
//    if(prev.indexOf(curr) >= 0) {
//     repeats.push(curr);
//    }
//    return repeats;
//}, [])
//}
//console.log(duplicates(string));

//function secretMessage(str) {
//    const arr = str.split(" ");
//    const dupes = arr.filter((word, i, array) => array.indexOf(word) !== array.lastIndexOf(word));
//    const onlyOnce = dupes.filter((word, i, array) => {
//        return i === array.indexOf(word);
//    })
//}
//
//console.log(secretMessage(phrase));

function secretMessage(str) {
    return Array.from(new Set(str.replace(/[^\w\s]/gi, '').split(" ").filter((word, i, array) => array.indexOf(word) !== array.lastIndexOf(word))));
}

console.log(secretMessage(phrase));