import React, { Component } from "react";
import "./topnav.css";
import Link from "./link.jsx";
import Links from "./links.jsx";

//export on one line
//export default class topnav extends Component
class Topnav extends Component {
  state = {
    icontoggle: false,
  };

  formatHeader = (linksmarkup) => {
    const { icontoggle } = this.state;
    if (icontoggle == false) {
      return (
        <div className="topnav">
          {linksmarkup}
          <div
            href="javascript:void(0);"
            className="icon"
            onClick={this.handleToggle}
          >
            <i class="fa fa-bars"></i>
          </div>
        </div>
      );
    } else {
      return (
        <div className="topnav responsive">
          {linksmarkup}
          <div
            href="javascript:void(0);"
            className="icon"
            onClick={this.handleToggle}
          >
            <i class="fa fa-bars"></i>
            {this.handleToggle}
          </div>
        </div>
      );
    }
  };

  handleToggle = () => {
    let { icontoggle } = this.state;
    if (icontoggle === false) {
      icontoggle = true;
      this.setState({ icontoggle: icontoggle });
    } else {
      icontoggle = false;
      this.setState({ icontoggle: icontoggle });
    }
    return { icontoggle };
  };

  render = () => {
    let linksmarkup = <Links />;
    console.log(linksmarkup);
    return this.formatHeader(linksmarkup);
  };
}

export default Topnav;
