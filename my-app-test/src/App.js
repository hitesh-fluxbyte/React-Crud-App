import React, { useState } from "react";
import "./App.css";
import Student from "./Student";
// import StateWithConstructor from "./State_With_Constructor";
import StateWithoutConstructor from "./State_Without_Constructor";
// import Children from "./Children";
import Onclick from "./OnClick";
import useCustomCounter from "./Custom";

function App() {
  const data = useCustomCounter();
  const nameStateVariable = useState("Gujarat");
  const handleClick = () => {
    nameStateVariable[1]("India");
  };

  return (
    <>
      <StateWithoutConstructor />
      <Student />
      <div className="App">
        <h1>{nameStateVariable[0]}</h1>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Change
        </button>
      </div>

      {/* <Children>I'm a Child</Children> */}
      {/* <StateWithConstructor /> */}
      <Onclick />

      <div className="App">
        <h1>Counter Up: {data.count}</h1>
        <button
          className="btn btn-primary"
          type="button"
          onClick={data.handleIncrement}
        >
          Increment
        </button>
      </div>

      <div className="App">
        <h1>Counter Down: {data.count1}</h1>
        <button
          className="btn btn-warning"
          type="button"
          onClick={data.handleDecrement}
        >
          Increment
        </button>
      </div>
    </>
  );
}
export default App;
