import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Student from "./Student";
import Children from "./Children";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Student />
    <App />
    <Children>I'm a Child</Children>
  </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById("root"));
