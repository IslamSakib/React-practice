import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: "" }; //Setting an empty string state to store user input
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" action="">
          <div className="field">
            <div className="ui massive icon input">
              <input
                onChange={(event) => {
                  this.setState({ entry: event.target.value }); // Setting an state to update user input to the empty string stste
                }}
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
}
