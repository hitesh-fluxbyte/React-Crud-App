import React, { Component } from "react";

class StateWithoutConstructor extends Component {
  state = {
    name: "Hitesh",
  };
  render() {
    return <h1 className="App">Hello {this.state.name}</h1>;
  }
}

export default StateWithoutConstructor;
