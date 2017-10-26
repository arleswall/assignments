// Example:
// 
const endpoint = "http://localhost:8080/monkeys"  
let query = {  
  color: "black",
  species: "howler"
}
// stringifyUrl(endpoint, query);

//returns "http://localhost:8080/monkeys?color=black&species=howler"

function stringifyUrl(){
  let url="http://localhost:8080/monkeys?"
  for(let key in query){
    url+= `${key}=${query[key]}&`
  }
  return url.slice(0, url.length - 1)
}

console.log(stringifyUrl(endpoint, query));

module.exports = stringifyUrl