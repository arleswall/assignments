
//1.
function total(arr) {
 var answer =  arr.reduce(function (previous, number){
        return previous + number;
}, 0);
    return answer;
}

console.log(total([1, 2, 3])) // 6  


var total = [1,2,3] // "123" 


//2.
function stringConcat(arr) {
var answer = arr.reduce(function(previous, number){
    return previous + number        
}, "");
    return answer;
}

console.log(stringConcat(total));


//3.
function totalVotes(arr) {
var peopleWhoVoted = 0
    var answer = arr.reduce(function(previous, person){
    if(person.voted) {
        return peopleWhoVoted++
    }
}, 0);
    return peopleWhoVoted;
}

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)) // 7 

//3.1

//function totalVotes(arr) {
//    return arr.reduce(function(results, currVoter){
//        if(currVoter.voted){
//            results.didVote++;
//        } else {
//            results.didntVote++;
//        }
//        return results;
//    }, {didVote: 0, didntVote: 0})
//}
//
//console.log(totalVotes(voters));


//4.

function shoppingSpree(arr) {
 var answer = arr.reduce(function(previous, number){
    return previous + number.price 
 }, 0);
    return answer;
}

var wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)) // 227005  


//5.


function flatten(arr) {
return arr.reduce(function(previous, number){
    return previous.concat(number);
}, [])
}

var arrays = [  
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)) // ["1", "2", "3", true, 4, 5, 6];


//6.


var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    var obj = { youngVotes: 0,
  youth: 0,
  midVotes: 0,
  mids: 0,
  oldVotes: 0,
  olds: 0 
}
return arr.reduce(function(results, currVoter){
    if(currVoter.age >= 18 && currVoter.age <= 25) {
        results.youth++;
        if(currVoter.voted) {
            results.youngVotes++;
        }
    } else if (currVoter.age >= 26 && currVoter.age <= 35) {
        results.mids++;
            if(currVoter.voted) {
            results.midVotes++;
        }
    } else if (currVoter.age >= 36 && currVoter.age <= 55) {
        results.olds++;
            if(currVoter.voted) {
            results.oldVotes++;
        }
    }
    return results;
}, obj);
}

console.log(voterResults(voters)) // Returned value shown below:  
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/