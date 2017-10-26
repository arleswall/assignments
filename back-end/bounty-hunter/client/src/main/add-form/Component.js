import React from "react";

function FormComponent(props){
  return(
    <div>
          <form onSubmit={props.handleSubmit}>
                <input onChange={props.handleChange} value={props.newItem.first} name="first"type="text"/>
                <input onChange={props.handleChange} value={props.newItem.last} name="last"type="text"/>
                <input onChange={props.handleChange} value={props.newItem.living} name="living"type="text"/>
                <input onChange={props.handleChange} value={props.newItem.bounty} name="bounty"type="number"/>
                <input onChange={props.handleChange} value={props.newItem.type} name="type"type="text"/>
                <button>+</button>
          </form>
    </div>
  )
}

export default FormComponent;