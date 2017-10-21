import React from "react";
import {connect} from "react-redux";
import {meme} from "../../redux/actions/"

function Meme(props){
  const style ={
    backgroundImage: `url(${props.meme.image})`,
    backgroundSize: "cover",
    width: "500px",
    height: "300px"
  }
  return(
    <div style={style}>
    <h1>{props.meme.top}</h1>
    <h1>{props.meme.bottom}</h1>
    <button onClick={()=>props.deleteMeme(props.index)}>Remove</button>
    </div>
  )
}

export default connect(null, meme)(Meme);