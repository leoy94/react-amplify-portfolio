import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Topnav from "./components/topnav.jsx";
import Body from "./components/body.jsx";

class App extends Component {
  state = {
    currenttab: "Home",
  };

  handleAppCurrentTab = (target) => {
    let { currenttab } = this.state;
    currenttab = target;
    this.setState({ currenttab: currenttab });
    this.render();
  };

  render = () => {
    return (
      <div className="App">
        <Topnav action={this.handleAppCurrentTab} />
        <Body currenttab={this.state.currenttab} />
      </div>
    );
  };
}

export default App;
