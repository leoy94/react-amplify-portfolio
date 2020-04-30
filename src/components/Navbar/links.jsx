//Layth Yousif 4/28/2020
//This jsx file defines the structure of a List of Links
//The class defines nav bar links and updates them when they have been clicked
import React, { Component } from "react";
import "./topnav.css";
import Link from "./link.jsx";

//this class defines nav bar links and updates them when they have been clicked
class Links extends Link {
  state = {
    currenttab: "Home",
    links: [
      {
        id: "Home",
        linkkey: "1",
        label: "Home",
        link: "#home",
        className: "active",
        active: true,
      },
      {
        id: "Personal",
        linkkey: "2",
        label: "Personal",
        className: "",
        link: "header-link",
        active: false,
      },
      {
        id: "Resume",
        linkkey: "3",
        label: "Resume",
        className: "",
        link: "header-link",
        active: false,
      },
      {
        id: "Portfolio",
        linkkey: "4",
        label: "Portfolio",
        className: "",
        link: "header-link",
        active: false,
      },
    ],
  };

  //called by handeCurrentTab
  //resets each of the links classes based 
  //on if they are active or inactive - active = false or true
  //and sets the class name
  //classes and states used for css styling and dynamic rendering
  resetClass = (currenttab) => {
    let links = (this.state.links = this.state.links.map((link) => {
      link.active = currenttab == link.label ? true : false;
      link.className = link.active == true ? "active" : "";
      return link;
    }));
    return links;
  };

  //called by handeCurrentTab
  //calls ascenting function embedded in the prop object
  //this sets the current tab attribure for the topnav's state
  handleCurrentTabChange = (currenttab) => {
    this.props.action(currenttab);
  };


  //called by handleClick in ./link.jsx; passed into the Link Component as method via the render method
  //used for on click of each nav bar item
  //calls resetClass to set the active state &  class state(used for css styling)
  //updates the state of each link 
  handleCurrentTab = (target) => {

    let { currenttab } = this.state;
    currenttab = target;

    //invokes resetClass to set the active class (used for css styling)
    let newlinks = this.resetClass(currenttab);

    //updates the state of each link 
    this.setState({ currenttab: currenttab });
    this.setState({ links: newlinks });
    
    //invokes ascenting function
    //calls ascenting function embedded in the prop object
    //this sets the current tab attribure for the topnav's state
    this.handleCurrentTabChange(currenttab);
    // this.render(); //this line is unncessary
  };

  render = () => {
    let linksmarkup = this.state.links.map((link) => {
      return (
        <Link
          id={link.id}
          label={link.label}
          className={link.className}
          link={link.link}
          linkkey={link.linkkey}
          href={link.link}
          key={link.id}
          active={link.active}
          action={this.handleCurrentTab}
        />
      );
    });
    return linksmarkup;
  };
}

export default Links;
