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
        <input className="checkbox" onChange={props.handleEdit} checked={props.completed} name="completed" type="checkbox"/>
        <button className="editbutton" onClick={props.handleToggle}>...</button>
        
          <div style={props.toggleDisplay ? show : hide}>          
              <form onClick={props.handleSubmit}>
                    <input className="editbar" onChange={props.handleEdit} value={props.title} name="title" type="text"/>
                    <button>Save</button>
              </form>
          </div>  
    </div>
  )
}

export default EditComponent;