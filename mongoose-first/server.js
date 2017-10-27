const express = require("express");
const app = express();

const mongoose = require("mongoose");
const port = process.env.PORT || 8080;


mongoose.connect("mongodb://localhost/shirts", (err)=>{
  if(err) throw err;
  console.log("Connected to the database")
})





app.listen(port, ()=>{
  console.log(`this server is runnning on port ${port}`)
})