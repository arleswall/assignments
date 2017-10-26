let database = [
    {a:0, b:3, c:0, d:3},
    {a:2, b:2, c:0, d:2},
    {a:1, b:1, c:2, d:3},
    {a:0, b:1, c:0, d:1}
  ]


let query = {
  a:0, b:3
}

// function filterDatabase(obj, data){
//     for (let key in query){
//     return database.filter((item)=>{
//         return item[key] == obj[key]
//       })
//     }
//   }
  
function filterDatabase(obj, data){
      return database.filter((doc)=>{
        for(let key in query){
          if(doc[key] !== obj[key]){
            return false
          }
        }
        return true;  
})}

console.log(filterDatabase(query, database));