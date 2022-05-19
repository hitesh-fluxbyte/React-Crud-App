import React from "react";
import "./App.css";
import Student from "./Student";

// Function Based
// function App() {
//   return (
//     <div className="App">
//     <h1>Hello React</h1>
//     </div>
//   );
// }

// Class Based
class App extends React.Component {
  render() {
    return (
      <>
        <h2 className="App">Hy</h2>
        <h2 className="App">Fluxbyte Technologies</h2>
        <Student />
      </>
    );
  }
}

export default App;
