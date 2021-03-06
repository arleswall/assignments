import React from "react";
import {Link} from "react-router-dom";

function Navbar(props){
  return(
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
    </div>
  )
}

export default Navbar;