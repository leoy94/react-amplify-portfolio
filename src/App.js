import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Topnav from "./components/topnav.jsx";
import Body from "./components/body.jsx";

function App() {
  return (
    <div className="App">
      <Topnav />
      <Body />
    </div>
  );
}

export default App;
