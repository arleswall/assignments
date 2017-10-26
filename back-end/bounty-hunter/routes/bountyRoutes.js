const express = require("express");
const bountyRoutes = express.Router();
const uuid = require("uuid/v4");

let array = [
  {first: "Mr.", last: "Bean", living: "true", bounty: 10000, type: "Jedi", _id: uuid()},
  {first: "Rufus", last: "DuSol", living: "false", bounty: 5000, type: "Sith", _id: uuid()}
]

bountyRoutes.get("/", (req, res)=>{
  newArray = array.filter((doc)=>{
   for (let key in req.query) {
     if (doc[key] != req.query[key]){
       return false
     }
    }
  return true
  })
  res.send(newArray);
})

bountyRoutes.post("/", (req, res)=>{
  req.body._id = uuid();
  array.push(req.body);
  res.send(req.body)
})

bountyRoutes.delete("/:id", (req, res)=>{
  let found = false
  array = array.filter((doc)=>{
    if (doc._id !== req.params.id){
      found = true;
      return false
    } else {
      return true
    }
  })
  if (found){
    res.send("Item removed")
  } else {
    res.send("Item not found")
  }
})
// bountyRoutes.delete("/:id", (req, res)=>{
//   array = array.filter((doc)=>{
//     return doc._id !== req.params.id
//   })
//   res.send({
//     message: "Item removed"
// })
// })

bountyRoutes.put("/:id", (req, res)=>{
  let newObj = req.body
  array = array.map((doc)=>{
    if (doc._id === req.params.id){
      return newObj = Object.assign(doc, newObj)
    } else {
      return doc
    }
  })
  res.send(newObj);
})


module.exports = bountyRoutes