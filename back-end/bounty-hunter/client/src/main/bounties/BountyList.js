import React from "react";
import {connect} from "react-redux";
import ListComponent from "./bounty/ListComponent";
import {bounties} from "../../redux/actions/";

class BountyList extends React.Component{
  constructor(){
    super();
    
    this.genList = this.genList.bind(this);
}

compoundDidMount(){
  this.props.loadBounties();
}

genList(){
  return this.props.bounties.map((bounty, index)=>{
    return <ListComponent key={bounty.first + index}
                          bounty={bounty}
                          index={index}
                          />
  })
}

render(){
  return(
    <div>
          <h5>{this.genList()}</h5>
    </div>
  )
}
}

const mapStateToProps = (state)=>{
  return {
    bounties: state.bounties
  }
}

export default connect(mapStateToProps, bounties)(BountyList);