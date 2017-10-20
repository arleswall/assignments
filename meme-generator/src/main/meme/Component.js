import React from "react";

function MemeComponent(props){
  return(
    <div>
    {props.genMeme()}
    </div>
  )
}

export default MemeComponent;