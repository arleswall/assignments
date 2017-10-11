import React from "react";


function Header(){
  const header={
    height: "150px",
    backgroundColor:"black",
    textAlign:"center"
  }
  const headerpic={
    height:"150px",
    float: "left"
  }
  
  const title={
    color:"red",
    fontSize:"3em",
    display:"inline-block",
    fontFamily: "courier",
    textDecoration:"underline"

  }
  return(
    <div style={header}>
    <img style={headerpic} src="https://vignette.wikia.nocookie.net/godfather/images/6/6d/Priorita.png/revision/latest?cb=20110110181219" alt=""/>
    <h1 style={title}>Don Corleones Hit List</h1>
    </div>
  )
}
export default Header;