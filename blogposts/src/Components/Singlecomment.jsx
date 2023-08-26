import React from "react";


export default function Singlecomment(props) {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.Picture} alt="Image" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.Name}
        </a>
        <div className="metadata">
          <span className="date">{props.Date}</span>
        </div>
        <div className="text">{props.Comment}</div>
      </div>
    </div>
  );
}
