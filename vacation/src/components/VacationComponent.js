import React from "react";

function VacationComponent(props){
//  const price = Number(props.price.substring(1)); To remove $ sign and turn string into number
  const styles ={
    backgroundImage: `url(${props.picture})`
  }

  return (
    <div className="box" style={styles}>
      <div className="title">
      <h1 className="place">{props.place} </h1> {/*alternatevely {props.spots.place}*/}
      </div>
      <div className="lowerbar">
      <h2 className="season">{props.timeToGo}</h2>
      <h2 className="price">{props.price} </h2>
      </div>
    </div>
  )
}

export default VacationComponent;
