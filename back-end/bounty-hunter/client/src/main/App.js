import React from "react";
import FormContainer from "./main/add-form/Container";
import BountyList from "./bounty/BountyList";

function App(props){
  return(
    <div>
      <FormContainer/>
      <BountyList/>      
    </div>
  )
}

export default App;