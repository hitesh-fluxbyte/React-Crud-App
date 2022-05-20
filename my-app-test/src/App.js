import React, { useState } from "react";
import "./App.css";
import Student from "./Student";
import StateWithConstructor from "./State_With_Constructor";
import StateWithoutConstructor from "./State_Without_Constructor";
import Children from "./Children";
import Onclick from "./OnClick";

// Function Based
function App() {
  const nameStateVariable = useState("Zala");
  const handleClick = () => {
    nameStateVariable[1]("Hitesh Zala");
  }
  return (
    <>
      <StateWithoutConstructor />
      <Student />
      <div className="App" >
      <h1 >{nameStateVariable[0]}</h1>
      <button type="button" className="btn btn-primary" onClick={handleClick}>Change</button>
      </div>
      <Children>I'm a Child</Children>
      <StateWithConstructor />
      <Onclick />
    </>
  );
}


// Class Based
// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <StateWithoutConstructor />
//         <Student />
//         <StateWithConstructor />
//         <Children>I'm a Child</Children>
//         <Onclick />
//       </>
//     );
//   }
// }

export default App;
