import React, { Component } from "react";
import "./topnav.css";

//export on one line
//export default class topnav extends Component
class Topnav extends Component {
  state = {
    currenttab: 2,
    icontoggle: false,
    links: [
      { label: "Home", link: "#home", className: "active" },
      { label: "Personal", link: "header-link" },
      { label: "Resume", link: "header-link" },
      { label: "Portfolio", link: "header-link" },
    ],
  };

  formatHeader = (linksmarkup) => {
    const { icontoggle } = this.state;
    if (icontoggle == false) {
      return (
        <div className="topnav">
          {linksmarkup}
          <a
            href="javascript:void(0);"
            className="icon"
            onClick={this.handleToggle}
          >
            <i class="fa fa-bars"></i>
          </a>
        </div>
      );
    } else {
      return (
        <div className="topnav responsive">
          {linksmarkup}
          <a
            href="javascript:void(0);"
            className="icon"
            onClick={this.handleToggle}
          >
            <i class="fa fa-bars"></i>
            {this.handleToggle}
          </a>
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
    const linksmarkup = this.state.links.map((link, index) => {
      return (
        <a
          className={link.className}
          href={link.link}
          onClick=""
          key={link.label}
        >
          {link.label}
        </a>
      );
    });

    return this.formatHeader(linksmarkup);
  };
}

export default Topnav;
