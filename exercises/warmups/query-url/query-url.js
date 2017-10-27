// Example:
// 
const endpoint = "http://localhost:8080/monkeys"  
let query = {  
  color: "black",
  species: "howler"
}
// stringifyUrl(endpoint, query);

//returns "http://localhost:8080/monkeys?color=black&species=howler"

// function stringifyUrl(){
//   let url="http://localhost:8080/monkeys?"
//   for(let key in query){
//     url+= `${key}=${query[key]}&`
//   }
//   return url.slice(0, url.length - 1)
// }
// 
// console.log(stringifyUrl(endpoint, query));
// 
// module.exports = stringifyUrl

let queryUrl = "http://localhost:8080/monkeys?color=black&species=howler"

function objectify(str){
  let obj = {}
let endpoint = str.indexOf("?")
let url = str.slice(endpoint +1).split(/[=&]/);
for(let i =0; i < url.length; i+=2){
  obj[url[i]] = url[i+1]
}
return obj
}

console.log(objectify(queryUrl))