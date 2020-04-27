import React, { Component } from "react";
import "./topnav.css";

//export default class topnav extends Component (export on one line)
class Topnav extends Component {
  // state = {  }

  render() {
    return (
      <div className="topnav">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="javascript:void(0);" className="icon" onClick="">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    );
  }
}

export default Topnav;
