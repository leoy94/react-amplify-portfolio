import React, { Component } from "react";
import "./topnav.css";
import Links from "./links.jsx";

//export on one line
//export default class topnav extends Component
class Topnav extends Component {
  state = {
    icontoggle: false,
    currenttab: "Home",
  };

  formatHeader = (linksmarkup) => {
    const { icontoggle } = this.state;
    if (icontoggle == false) {
      return (
        <div className="topnav" key="topnav">
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
        <div className="topnav responsive" key="topnav">
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

  handleCurrentTabChange = (target) => {
    this.props.action(target);
  };

  handleCurrentTab = (target) => {
    // console.log(target);
    // console.log("handleCurrentTab");
    let { currenttab } = this.state;
    currenttab = target;
    this.setState({ currenttab: currenttab });
    this.handleCurrentTabChange(currenttab);
    this.render();
  };

  render = () => {
    return this.formatHeader(<Links action={this.handleCurrentTab} />);
  };
}

export default Topnav;
