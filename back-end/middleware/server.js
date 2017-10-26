const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const morgan = require("morgan");

const utils = require("./utils.js")

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(utils.explosion);


app.get("/", (req, res)=>{
  utils.explosion;
  res.send("success");
})

app.listen(8000, ()=>console.log("Server running"))