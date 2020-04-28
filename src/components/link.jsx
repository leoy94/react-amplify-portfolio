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

  setActiveClass = () => {
    let { className } = this.state;
    if (className == "active") {
      className = "";
      this.setState({ className: className });
    } else {
      className = "active";
      this.setState({ className: className });
    }
    console.log(this.state);
  };

  render = () => {
    return (
      <div
        href={this.state.id}
        onClick={this.setActiveClass}
        key={this.state.label}
        className={this.state.className}
      >
        {this.state.label}
      </div>
    );
  };
}

export default Link;
