import React from "react";
import {bounties} from "../../../redux/actions/";
import {connect} from "react-redux";
import EditContainer from "./edit-form/Container";

function ListComponent(props){
  return(
    <div>
        <h5>{props.bounty.first}{props.bounty.last}{props.bounty.living}{props.bounty.bounty}{props.bounty.type}</h5>
        <button onChange={()=>{props.deleteBounty(props.bounty._id)}}>X</button>
        <EditContainer bounty={props.bounty}/>
    </div>
  )
}

export default connect(null, bounties)(ListComponent);