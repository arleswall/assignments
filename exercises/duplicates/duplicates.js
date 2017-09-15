function findDuplicate(str) {
    
    var result = "";
    
    for (var i = 0; i < str.length; i++) {
        
        if (result.indexOf(str[i]) < 0) {
            result += str[i];
            
        }
    }
}

console.log(findDuplicate("bookkeeper larry"));





function findDuplicate(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) {
            result += str[i];
        }

    }
    return result;
}

console.log(findDuplicate("racecar"));
