import React, { Component } from "react";

// Class Based
class Onclick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: 1,
      Name: " ReactJs",
      Tech: "JavaScript",
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (Id) => {
    console.log("Button Clicked", Id, this);
    this.setState({ Name: " Jay" });
  };

  handleClickArg = () =>{
    this.handleClick(this.state.Id);
  };
  render() {
    return (
      <div className="App">
        <h1>Hello{this.state.Name}</h1>
        <button className="btn btn-warning" onClick={this.handleClickArg}>
          Change
        </button>
      </div>
    );
  }
}

export default Onclick;

// Function Based
// function Onclick(props) {
//   function handleClick() {
//     console.log("Button Clicked");
//   }
//   return (
//     <div className="App">
//       <button className="btn btn-primary" onClick={handleClick}>
//         Add Data
//       </button>
//     </div>
//   );
// };
// export default Onclick;
