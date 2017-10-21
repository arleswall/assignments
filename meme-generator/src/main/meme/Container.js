import React from "react";
import MemeComponent from "./Component";
import Meme from "./Meme";
import {connect} from "react-redux"

class MemeContainer extends React.Component{
  constructor(){
    super();
    this.genMeme = this.genMeme.bind(this);
  }
  
  genMeme(){
    return this.props.meme.map((item, index)=>{
      return <Meme key={item + index}
                  meme={item}
                  index={index}
                  />
    })
  }
  render(){
    console.log(this.props)
    return(
      <MemeComponent genMeme={this.genMeme}/>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    meme: state.meme
  }
}

export default connect(mapStateToProps, {})(MemeContainer);