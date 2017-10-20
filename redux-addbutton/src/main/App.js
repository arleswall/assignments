import React from "react";
import Counter from "./Counter";
import ContactList from "./contacts/ContactList";

function App(props){
    return (
      <div>
          <Counter/>
          <ContactList/>
      </div>
    )
}

export default App;