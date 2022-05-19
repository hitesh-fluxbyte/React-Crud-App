import React, { Component } from "react";

class StateWithConstructor extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
        name:"Hitesh",
        roll:11
    }
  };
  render(){
      return (
        <h1 className="App">Hello {this.state.name}
        Your Roll Number is {this.state.roll}</h1>
      );
  }
}
export default StateWithConstructor;