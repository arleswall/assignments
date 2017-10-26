// display form and handle event listeners
import React from "react";

function FormComponent(props){
  return(
    <div className="addbox">
        <form onSubmit={props.handleSubmit}>
            <input className="additem" onChange={props.handleChange} value={props.newItem.title} name="title" type="text" placeholder="Add an item..."/>
            <button className="addbutton">+</button>
        </form>
    </div>
  )
}

export default FormComponent;