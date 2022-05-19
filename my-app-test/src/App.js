import React from "react";
import "./App.css";
import Student from "./Student";
import StateWithConstructor from "./State_With_Constructor";
import StateWithoutConstructor from "./State_Without_Constructor";
import Children from "./Children";
import Onclick from "./OnClick";

// Function Based
function App() {
  return (
    <>
      <StateWithoutConstructor />
      <Student />
      <StateWithConstructor />
      <Children>I'm a Child</Children>
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
