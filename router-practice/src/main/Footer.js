import React from "react";
import {Link} from "react-router-dom";

function Footer(){
  return(
    <div className="footer">
      <Link to="/contact" >Contact</Link>
    </div>
  )
}

export default Footer;