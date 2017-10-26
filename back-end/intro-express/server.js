const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");
//const bountyRoutes = require("./routes/bountyRoutes");

//app.use("/bounty", bountyRoutes);
app.use(bodyParser.json());

let tacos = [
  {
    title: "Chicken Taco",
    price: 2.95,
    _id: "d503f327-4d71-b5tg9-cbg65g"
  },
  {
    title: "Fish Taco",
    price: 2.95,
    _id: "d503f327-4d71-4959-b539g6g"
  },
  {
    title: "Double-Stuffed Birthday Surprise",
    price: 3.95,
    _id: "d503f327-4d7146g"
  }
]

app.get("/tacos", (request, response)=>{
  response.send(tacos)
})

//QUERY
// app.get("/tacos", (req, res)=>{
//   let filteredTacos = tacos.filter((doc)=>{
//       for(let key in req.query){
//           if(doc[key] != req.query[key]){
//             return false
//           }
//         }
//         return true;  
//   response.send(filteredTacos)
// })
// }

app.get("/tacos/:id", (req, res)=>{
  let taco = tacos.find((taco)=>{
    if (taco._id === req.params.id){
      return true
    } else {
      return false
    }
  })
  res.send(taco)
})

app.post("/tacos", (req, res)=>{
  let taco = req.body;
  taco._id = uuid(); //req.body._id = uuid()
  tacos.push(req.body);
  res.send(req.body);
})

app.delete("/tacos/:id", (req, res)=>{
  let found = false
  tacos = tacos.filter((taco)=>{
    if(taco._id !== req.params.id) {
      found = true;
      return false
    } else{
      return true
    }
  });
  if(found){
  res.send({
    message: "Item Removed"
  })
} else{
  res.send({
    message:"Item not found"
  })
}
})

add.put("/tacos/:id", (req, res)=>{
  let newTaco = req.body
  tacos = tacos.map((taco)=>{
    if(taco._id === req.params.id){
      return newTaco = Object.assign(taco, newTaco);
    } else {
      return taco
    }
  });
  res.send(newTaco)
});

app.listen(8000, ()=>{
  console.log("Server is running on port 8000")
});