import React from "react";
import {connect} from "react-redux";
import {countries} from "../../redux/actions/"

function Country(props){
  const style = {
    bakcgroundImage: `url(${props.country.imgUrl})`,
    backgroundSize: "cover",
    width: "500px",
    height: "300px",
    // backgroundColor: "blue"
  }
  return(
    <div style={style}>
          <h4>{props.country.name}</h4>
          <button onClick={()=>props.deleteCountry(props.index)}>Remove</button>
    </div>
  )
}

export default connect(null, countries)(Country);