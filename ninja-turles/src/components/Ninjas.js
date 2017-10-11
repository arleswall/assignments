import React from "react";
// import background from "../background.jpg";

function Ninjas(props){
  const styleCustom = {
    // backgroundColor: "whitesmoke",

}
  return (
<div style={styleCustom}>
      <div className="box" onClick= {()=> props.click(props.favorites)}>
        <img src={props.pic} className="pic" alt=""/>
        <h1>{props.name}</h1>
      </div>
      </div>
  )
}
export default Ninjas;
