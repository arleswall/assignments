import React from "react";

function Service(props){
  const id = props.match.params.id
  return(
    <div>
        <h1>{props.searchById(id).title}</h1>
        <h1>{props.searchById(id).price}</h1>
    </div>
  )
}

export default Service;