import React, { useState } from "react";

export default function Search() {
  const [input, setInput] = useState("");
  const onFormSubmit = (event) => {
    event.target.value = setInput;
    event.preventDefault();
    console.log(input);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form" action="">
        <div className="field">
          <div className="ui massive icon input">
            <input type="text" placeholder="search..." />
            <i className="search icon"></i>
          </div>
        </div>
      </form>
    </div>
  );
}
