import React from "react"

function Meme(props){
  const style ={
    backgroundImage: `url(${props.meme.image})`
  }
  return(
    <div style={style}>
    <h1>{props.meme.top}</h1>
    <h1>{props.meme.bottom}</h1>
    </div>
  )
}

export default Meme;