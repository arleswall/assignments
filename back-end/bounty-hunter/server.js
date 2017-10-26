const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const bountyRoutes = require("./routes/bountyRoutes");

app.use("/bounty", bountyRoutes);
app.use(bodyParser.json());


app.listen(8000, ()=>{
  console.log("We be runnin on 8000")
})