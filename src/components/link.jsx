import React, { Component } from "react";

class Link extends Component {
  state = {
    id: this.props.id,
    linkkey: this.props.linkkey,
    label: this.props.label,
    link: this.props.link,
    className: this.props.className,
    active: this.props.active,
  };

  handleClick = () => {
    return this.props.action(this.state.id);
  };

  resetState = () => {
    if (this.props.active != this.state.active) {
      let new_active = this.props.active;
      let { active } = this.state;
      active = new_active;
      console.log("ResetStateTriggered");
      this.setState({ active: active });

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
        {this.state.label}
      </div>
    );
  };
}

export default Link;
