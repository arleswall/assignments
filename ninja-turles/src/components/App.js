import React from "react";
import Ninjamap from "./Ninjamap";
import background from "../background.jpg";

function App(){
  const outerdiv = {
    textAlign:"center",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    paddingLeft:"25%",
    paddingRight:"25%",
    paddingBottom:"9%"
  }

  return(
    <div style={outerdiv}>
      <img className="title" src="https://vignette1.wikia.nocookie.net/fictionalcrossover/images/7/73/Teenage_Mutant_Ninja_Turtles.png/revision/latest?cb=20131107221051" alt=""/>
    <Ninjamap/>
    </div>
  )
}

export default App;
