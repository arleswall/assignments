const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bountyRoutes = require("./routes/bountyRoutes");
// const cors = require("cors");
// const morgan = require("morgan")
// 
// app.use(morgan("dev"));
// app.use(cors());
app.use(bodyParser.json());

app.use("/bounty", bountyRoutes);



app.listen(8000, ()=>{
  console.log("We be runnin on 8000")
})