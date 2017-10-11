import React from "react";

function Soda(props){
  return(
    <div>
        <input placeholder="Type Favorite Soda" onChange={props.handleChange} value={props.label} type="text"/>
        <h1>{props.label}</h1>
        <button onClick={props.handleClick}>Display Text</button>
    </div>
  )
}

export default Soda;
