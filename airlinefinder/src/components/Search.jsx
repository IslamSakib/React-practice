import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: "" }; //Setting an empty string state to store user input
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.entry)
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" action="">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="search..."
                onChange={(event) => {
                  this.setState({ entry: event.target.value }); // Setting an state to update user input to the empty string stste
                }}
                value={this.state.entry}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
