const express = require("express");
const skateRoutes = express.Router();
const Skateboard = require("../models/skateboard");


skateRoutes.get("/", (req, res)=>{
  //get the skates array from the database
  Skateboard.find((err, skates)=>{
    if (err) return res.status(500).send(err);
    return res.send(skates);
  })
})

skateRoutes.get("/:id", (req, res)=>{
  Skateboard.findById(req.params.id, (err, skate)=>{
    if (err) return res.status(500).send(err);
    return res.send(skate);
  })
})

skateRoutes.post("/", (req, res)=>{
  const newSkateboard = new Skateboard (req.body);
  newSkateboard.save((err, skate)=>{
    if (err) return res.status(500).send(err);
    return res.send(skate);
  })
})

skateRoutes.delete("/:id", (req, res)=>{
  Skateboard.findByIdAndRemove(req.params.id, (err, skate)=>{
    if (err) return res.status(500).send(err);
    return res.send(skate);
  })
})

skateRoutes.put("/:id", (req, res)=>{
  Skateboard.findByIdAndUpdate(req.params.id, req.body, (err, skate)=>{
    if (err) return res.status(500).send(err);
    return res.send(skate);
  })
})


module.exports = skateRoutes;