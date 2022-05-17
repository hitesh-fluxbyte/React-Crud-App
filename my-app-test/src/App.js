import React from "react";
import "./App.css";

// Function Based
// function App() {
//   return (
//     <div className="App">
//     <h1>Hello React</h1>
//     </div>
//   );
// }

// Class Based
class App extends React.Component{
  render(){
    return<h1 className="App">Hello React Application</h1>;
  };
};

export default App;
