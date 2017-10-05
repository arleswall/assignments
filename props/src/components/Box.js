import React from "react";



function Box(props){
  return (
    <div className="box">
    <h1>{props.name}</h1>
    <h2>{props.phone}</h2>
    <img src={props.img} alt=""/>
    </div>
  )
}

export default Box;
