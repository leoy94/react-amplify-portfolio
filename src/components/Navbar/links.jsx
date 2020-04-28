import React, { Component } from "react";
import "./topnav.css";
import Link from "./link.jsx";

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

  resetClass = (currenttab) => {
    let links = (this.state.links = this.state.links.map((link) => {
      link.active = currenttab == link.label ? true : false;
      link.className = link.active == true ? "active" : "";
      // console.log(link.active);
      return link;
    }));
    return links;
  };

  handleCurrentTabChange = (currenttab) => {
    this.props.action(currenttab);
  };

  handleCurrentTab = (target) => {
    // console.log(target);
    let { currenttab } = this.state;
    currenttab = target;

    //this following line is for debugging
    // console.log("Tab " + currenttab + " Was Clicked!");

    let newlinks = this.resetClass(currenttab);
    this.setState({ currenttab: currenttab });
    this.setState({ links: newlinks });
    this.handleCurrentTabChange(currenttab);
    this.render();

    //this following lines are for debugging
    /*
    this.state.links.map((link) => {
      console.log(
        "Link Name " +
          link.label +
          " Link Class " +
          link.className +
          " Link Active " +
          link.active
      );
    });
    */
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
