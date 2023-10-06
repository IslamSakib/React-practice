import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  // Constructor is the element of a base class
  constructor(props) {
    // Calling super to innitialize the props of the base class component
    super(props);
    this.state = { date: new Date() };
  }

  // Adding function to mount the state in DOM
  componentDidMount() {
    // Setting interval to update the state with 1s interval
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  render() {
    return (
      <>
        <div className="heading">
          <h1>Live Time</h1>
          <h2 className="text">
            {this.state.date.toLocaleTimeString(this.props.locale)}
          </h2>
        </div>
      </>
    );
  }
}
