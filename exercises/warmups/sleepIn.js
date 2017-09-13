var sleepIn = function(weekday, vacation){ 
    if ( weekday === true && vacation === false ) {
    return false
    }   else {
        return true
    }
}

console.log(sleepIn(true, true)) //true
console.log(sleepIn(true, false)) //false
console.log(sleepIn(false, true)) //true
console.log(sleepIn(false, false)) //true