import React from "react";

function Contact(props){
  return(
    <div className="contacts">
    <h3>{props.contact.firstName}</h3>
    <h5>{props.contact.lastName}</h5>
    <p>{props.contact.phone}</p>
    </div>
  )
}

export default Contact;