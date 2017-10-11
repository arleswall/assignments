import React from "react";
import Ninjamap from "./Ninjamap";
import background from "../background.jpg";

function App(){
  const outerdiv = {
    textAlign:"center",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    height: "850px"
  }
  return(
    <div style={outerdiv}>
    <Ninjamap/>
    </div>
  )
}

export default App;
