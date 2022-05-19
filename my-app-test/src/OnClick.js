import React from "react";

// Class Based
// class Onclick extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         Name:"ReactJs",
//         Tech:"JavaScript"
//     }
//     // this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick = () => {
//     console.log("Button Clicked", this);
//   }
//   render() {
//     return (
//       <div className="App">
//         <button className="btn btn-primary" onClick={this.handleClick}>
//           Add Data
//         </button>
//       </div>
//     );
//   }
// }

// export default Onclick;

// Function Based
function Onclick(props) {
  function handleClick() {
    console.log("Button Clicked");
  }
  return (
    <div className="App">
      <button className="btn btn-primary" onClick={handleClick}>
        Add Data
      </button>
    </div>
  );
};
export default Onclick;