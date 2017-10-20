import React from "react";

function Country(props){
  const style = {
    bakcgroundImage: `url(${props.country.imgUrl})`,
    backgroundSize: "cover",
    width: "100%",
    height: "500px"
  }
  return(
    <div style={style}>
          <h4>{props.country.name}</h4>
    </div>
  )
}

export default Country;