import React, { Component } from "react";
import "./topnav.css";
import Link from "./link.jsx";

class Links extends Link {
  state = {
    currenttab: 1,
  };

  links = [
    {
      id: "Home",
      linkkey: "1",
      label: "Home",
      link: "#home",
      className: "",
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
      label: "Portfolio",
      className: "",
      link: "header-link",
      active: false,
      linkkey: "4",
    },
  ];

  changeActiveTab = () => {
    let { currenttab } = this.state;
    //current tab == clicked value
    //update current tab state
    //update active attribute to specific link
  };

  render = () => {
    const linksmarkup = this.links.map((link) => {
      return (
        <Link
          id={link.id}
          label={link.label}
          className={link.active === true ? "active" : ""} //link.className
          link={link.link}
          linkkey={link.linkkey}
          href={link.link}
          key={link.id}
          active={link.active}
          //dont forget on click on next age
        />
      );
    });
    return linksmarkup;
  };
}

export default Links;
