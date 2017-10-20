import React from "react";
import {connect} from "react-redux";
import Contact from "./Contact";
import {removeName} from "../../redux/actions/index.js"


function ContactList(props){
  return(
    <div>
        <div className="remove">
              <button onClick={props.removeName}>Remove Contact</button>
        </div>
        <div>
            {props.contactList.map((contact, i)=>{
                return <Contact contact= {contact}
                          key= {contact.firstName + i}
                          />
        })}
        </div>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return state
}

export default connect(mapStateToProps, {removeName})(ContactList);