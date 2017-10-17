import React from "react";
import {Switch, Route} from "react-router-dom";
import Service from "./Service";

function ServicesComponent(props){
const searchById = props.searchById
  return(
    <div>
  <div className="servLinks">
    {props.generateLinks()}
</div>
    <div className="services">
        <Switch>
            <Route path="/services/:id" render={(props)=>{
              return(
                <Service searchById={searchById}{...props}/>
              )
            }}/>
        </Switch>
    </div>
  </div>
  )
}

export default ServicesComponent;