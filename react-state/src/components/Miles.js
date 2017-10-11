import React from "react";

function Miles(props){
  const styles = {
    height: "400px",
    width: "300px",
    textAlign: "center",
    backgroundColor: "yellow",
    border: "1px dotted black",
    margin: "auto",
    borderTopLeftRadius: "20%",
    borderTopRightRadius: "20%"

  }
  const plane = {
    height: "200px"
  }
  const button = {
    fontSize: "2em",
    border: "4px solid black",
    borderRadius: "30%",
    backgroundColor: "skyblue"
  }
  return(
    <div style={styles}>
    <img style={plane} src="https://www.iconshock.com/v2/image/SuperVista/Accounting/plane" alt=""/>
      <h1>Miles: {props.miles}</h1>
      <button style={button} onClick={props.moreMiles}>Gimme Miles</button>
      <button style={button} onClick={props.mooreMiles}>Gimme 1k Miles</button>
    </div>
  )
}

export default Miles;
