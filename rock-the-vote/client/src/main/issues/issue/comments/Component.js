import React from "react";

function CommentComponent(props){
    console.log(props)
  return (
    <div>
        <form onSubmit={props.handleSubmit}>
            <label>Name</label><input onChange={props.handleChange} value={props.newItem.name} name="name" placeholder="name" type="text"/>
            <label>Comment</label><input onChange={props.handleChange} value={props.newItem.comment} name="comment" placeholder="comment" type="text"/>
            <button>Post</button>
        </form>
    </div>
  )
}

export default CommentComponent;