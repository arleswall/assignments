import React from "react";
import HitList from "./components/HitList";
import Header from "./components/Header"

function App(){
  const box={
    border: "2px solid black",
    textAlign:"center",
    paddingRight: "2%",
    paddingLeft:"2%",
    backgroundColor:"gainsboro"
    
  }
  return(
    <div>
    <Header/>
    <div style={box}>
      <HitList />
      </div>
    </div>
  )
}
export default App;