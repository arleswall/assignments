import React from "react";

function FormComponent(props){
  return(
    <div>
          <form onSubmit={props.handleSubmit}>
                <label>First</label><input onChange={props.handleChange} value={props.newItem.first} name="first"type="text"/>
                <label>Last</label><input onChange={props.handleChange} value={props.newItem.last} name="last"type="text"/>
                <label>Living</label><input onChange={props.handleChange} value={props.newItem.living} name="living"type="text"/>
                <label>Bounty $</label><input onChange={props.handleChange} value={props.newItem.bounty} name="bounty"type="number"/>
                <label>Type</label><input onChange={props.handleChange} value={props.newItem.type} name="type"type="text"/>
                <button>+</button>
          </form>
    </div>
  )
}

export default FormComponent;