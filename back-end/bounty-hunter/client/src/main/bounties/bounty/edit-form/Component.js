import React from "react";

function EditComponent(props){
  return(
    <div>
        <form onSubmit={props.handleSubmit}>
              <input onChange={props.handleEdit} value={props.editBounty.first} name="first" type="text"/>
              <input onChange={props.handleEdit} value={props.editBounty.last} name="last" type="text"/>
              <input onChange={props.handleEdit} value={props.editBounty.living} name="living" type="text"/>
              <input onChange={props.handleEdit} value={props.editBounty.bounty} name="bounty" type="text"/>
              <input onChange={props.handleEdit} value={props.editBounty.type} name="type" type="text"/>
              <button>Save</button>
        </form>
    </div>
  )
}

export default EditComponent;