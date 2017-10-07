import React from "react";

function Bodyhtml(props) {
  return (
      <div className="list">
        <ul>
            <li><a className="articletitle" href="">{props.title}</a><br/><a className="articledescrip" href="">{props.description}
            </a><br/><span className="articledetails">Posted by <span className="by">{props.by}</span> on {props.date}</span></li>
        </ul>
      </div>
  )
}

export default Bodyhtml;
