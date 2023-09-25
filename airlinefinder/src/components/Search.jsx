import React, { useState } from "react";

export default function Search() {
  let [entry, NewENtry] = useState("");

  const onInputChange = (event) => {
    console.log(event.target.value)
  };

  const onFormSubmit = (event) => { 
    event.preventDefault()
   }

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form" action="">
        <div className="field">
          <div className="ui massive icon input">
            <input
              onChange={onInputChange}
              type="text"
              placeholder="search..."
            />
            <i className="search icon"></i>
          </div>
        </div>
      </form>
    </div>
  );
}
