import React from "react";
import {Link} from "react-router-dom";


function Navbar(props){
  return(
    <div className="navbar">
        <Link to="/" className="navbarLinks" >
            {window.location.pathname === "/" ? "":"arles_"}
        </Link>
        <Link to="/projects/" className="navbarLinks" >
            {window.location.pathname !== ("/") && ("/about") ? "":"projects"}
        </Link>
    </div>
  )
}

export default Navbar;