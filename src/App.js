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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
