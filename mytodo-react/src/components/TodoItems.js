import React from "react";

function TodoItems(props){
  return(
    <div className="listbox">
        <h3 className="titlebox">{props.items.title}</h3>
        <h4 className="descriptionbox">{props.items.description}</h4>
        <button className="delete" onClick={()=>props.deleteButton(props.items._id)}>X</button>
      
    </div>
    
  )
}


export default TodoItems;