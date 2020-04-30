//Layth Yousif 4/28/2020
//This jsx file defines the structure of an Individual Link

import React, { Component } from "react";

//The Link class defines a nav bar links and updates when they it has been clicked
class Link extends Component {
  state = {
    id: this.props.id,
    linkkey: this.props.linkkey,
    label: this.props.label,
    link: this.props.link,
    className: this.props.className,
    active: this.props.active,
  };

  //uses the state_id to call the handleCurrentTabClick method in ./links.jsx
  //via the props. action object passed in from ./links.jsx
  //when it envokes handleCurrentTabClick react will update the necessary state 
  //depending on which embedded attributes changed
  handleClick = () => {
    return this.props.action(this.state.id);
  };

  //sets the active state & class state(used for css styling)
  //reset is dynamically rendered on change
  resetState = () => {
    if (this.props.active != this.state.active) {
      let new_active = this.props.active;
      let { active } = this.state;
      active = new_active;

      //another way to set the state
      //console.log("ResetStateTriggered");
      this.setState({ active: active });

      //another way to set the state
      let new_className = active == true ? "active" : "";
      this.setState({ className: new_className });
    }
  };

  render = () => {
    this.resetState();
    return (
      <div
        href={this.state.id}
        key={this.state.label}
        className={this.state.className}
        id={this.state.id}
        onClick={this.handleClick}
      >
        {this.props.children}
        {this.state.label}

      </div>
    );
  };
}

export default Link;
