import React from "react";
import FormContainer from "./add-form/Container";
import BountyList from "./bounties/BountyList";

function App(props){
  return(
    <div>
      <FormContainer/>
      <BountyList/>      
    </div>
  )
}

export default App;