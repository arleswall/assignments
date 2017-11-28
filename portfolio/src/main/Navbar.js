import React from "react";
import {Link} from "react-router-dom";


function Navbar(props){
  return(
    <div className="navbar">
        <Link to="/" className="navbarLinks" >
            {window.location.pathname === "/" ? "":"arles_"}
        </Link>
        <Link to="/portfolio/" className="navbarLinks" >
            {window.location.pathname !== ("/") && ("/about") ? "":"portfolio"}
        </Link>
    </div>
  )
}

export default Navbar;