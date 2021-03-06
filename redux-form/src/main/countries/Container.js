import React from "react";
import CountriesComponent from "./Component";
import {connect} from "react-redux";
import Country from "./Country";


class CountriesContainer extends React.Component{
  constructor(){
    super();  
    this.genList = this.genList.bind(this);
  }
  
  genList(){
    return this.props.countries.map((country, index)=>{
      return <Country
                key={country.name +index}
                country={country}
                index={index}
                />
    })
  }
  
  render(){
    return(
      <CountriesComponent
                genList={this.genList}
                />
    )
  }
}
const mapStateToProps = (state)=> {
  return {
    countries: state.countries
  }
}


export default connect(mapStateToProps, {}) (CountriesContainer);