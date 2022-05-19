import React, { Component } from "react";

class StateWithConstructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hitesh",
      roll: 11,
    };
  }
  render() {
    return (
      <h1 className="App">
        Hello {this.state.name}
        Your Roll Number is {this.state.roll}
      </h1>
    );
  }
}
export default StateWithConstructor;
