// display form
// call event listeners
import React from "react";

function EditComponent(props){
  let hide = {
    display: "none"
  }
  let show = {
    display: "inherit"
  }
  return(
    <div>
        <input onChange={props.handleEdit} checked={props.completed} name="completed" type="checkbox"/>
        <button onClick={props.handleToggle}>Edit</button>
        
          <div style={props.toggleDisplay ? show : hide}>          
              <form onClick={props.handleSubmit}>
                    <input onChange={props.handleEdit} value={props.title} name="title" type="text"/>
                    <button>Save</button>
              </form>
          </div>  
    </div>
  )
}

export default EditComponent;