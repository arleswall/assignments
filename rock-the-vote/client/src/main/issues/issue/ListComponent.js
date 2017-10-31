import React from "react";
import {connect} from "react-redux";
import {issues} from "../../../redux/actions/";
import CommentContainer from "./comments/Container";

function ListComponent(props){
  return(
    <div className="postbox">
            <button onClick={()=>{props.deleteIssue(props.issue._id)}}>X</button>
                  <h4>{props.issue.title}</h4>
                  <h5>{props.issue.description}</h5>
              <button onClick={()=>{props.likes(props.issue)}}>+</button>
                    <span>Likes {props.issue.likes}</span>
                    <br/>
                    <button onClick={()=>{props.dislikes(props.issue)}}>-</button>
                    <span>Dislikes {props.issue.dislikes}</span>  
                  
                    <CommentContainer/>
              <hr/>
    </div>
  )
}

export default connect(null, issues)(ListComponent);