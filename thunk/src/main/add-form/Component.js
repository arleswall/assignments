// display form and handle event listeners
import React from "react";

function FormComponent(props){
  return(
    <div>
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} value={props.newItem.title} name="title" type="text"/>
            <button>+</button>
        </form>
    </div>
  )
}

export default FormComponent;