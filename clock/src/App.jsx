import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  // Constructor is the element of a base class
  constructor(props) {
    // Calling super to innitialize the props of the base class component
    super(props);
    this.state = { date: new Date() };
  }

  // Creating this cnstructor to pass the method to interval function
  tick() {
    this.setState({ date: new Date() });
  }

  // Adding lifecycle method to mount the state in DOM
  componentDidMount() {
    // Setting interval to update the state with 1s interval
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  //Adding lifecycle method to unmount the interval. So that the function stop working from background after leaving the application from the dom.
  componentWillUnmount(){
    clearInterval(this.clockTimer)
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
