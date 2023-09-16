import React, { useState } from "react";

export default function Search() {
  let [entry, NewENtry] = useState("");

  const onInputChange = (event) => {
    event.target.value = NewENtry;
    NewENtry = entry;
    console.log(entry);
  };

  return (
    <div className="ui segment">
      <form className="ui form" action="">
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
