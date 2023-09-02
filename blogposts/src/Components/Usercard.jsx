import React from "react";

export default function Usercard(props) {
  return (
    <div className="ui card">
      <div className="content">
        <div className="description">{props.children}</div>
      </div>
      <div className="ui button bottom">
        <i className="add icon"></i>Add Friend
      </div>
    </div>
  );
}
