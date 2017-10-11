import React from "react";

function HitComponent(props){
  const styles={
    height:"300px",
    width:"250px",
    display: "inline-block",
    margin: "1%",
    border: "2px solid black"
  }
  const img={
    height:"300px",
    width:"100%"
  }
  return(
    <div style={styles}>
          <img style={img} src={props.image} alt=""/>
              <h4>{props.name}</h4>
    </div>
  )
}

export default HitComponent;