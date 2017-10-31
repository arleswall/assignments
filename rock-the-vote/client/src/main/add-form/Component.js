import React from "react";

function FormComponent(props){
  return (
    <div className="addbox">
        <form onSubmit={props.handleSubmit}>
            <label>Title</label><input onChange={props.handleChange} value={props.newItem.title} name="title" placeholder="title" type="text"/>
            <br/>
            <label>Description</label><input onChange={props.handleChange} value={props.newItem.description} name="description" placeholder="description" type="text"/>
            <button>Post</button>
        </form>
    </div>
  )
}

export default FormComponent;