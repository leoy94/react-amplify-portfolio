//Layth Yousif 4/28/2020
//This jsx file defines the structure of the nav bar

import React, { Component } from "react";
import "./topnav.css";
import Links from "./links.jsx";

//export class definition on one line //export default class topnav extends Component

//this class defines nav bar links and updates them when they have been clicked
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

  //called by handeCurrentTab
  //calls ascenting function embedded in the prop object
  //this sets the current tab attribure for the app's state
  handleCurrentTabChange = (target) => {
    this.props.action(target);
  };
  
  handleCurrentTab = (target) => {
    let { currenttab } = this.state;
    //this takes care of most of the all of the code that is commented below
    currenttab = target;


    //invokes ascenting function
    //calls ascenting function embedded in the prop object
    //this sets the current tab attribure for the topnav's state
    this.handleCurrentTabChange(currenttab);
    
    this.setState({ currenttab: currenttab });
    // this.render(); //this line is unncessary
  };

  render = () => {
    return this.formatHeader(<Links action={this.handleCurrentTab} />);
  };
}

export default Topnav;
