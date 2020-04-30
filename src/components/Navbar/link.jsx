//Layth Yousif 4/28/2020
//This jsx file defines the structure of an Individual Link

import React, { Component } from 'react';

//The Link class defines a nav bar links and updates when they it has been clicked
//this is a good canditate for creating a stateless functional component
class Link extends Component {
	//uses the state_id to call the handleCurrentTabClick method in ./links.jsx
	//via the props. action object passed in from ./links.jsx
	//when it envokes handleCurrentTabClick react will update the necessary state
	//depending on which embedded attributes changed
	handleClick = () => {
		return this.props.action(this.props.link.id);
	};

	render = () => {
		return (
			<div
				href={this.props.link.id}
				key={this.props.link.label}
				className={this.props.link.className}
				id={this.props.link.id}
				key={this.props.link.id}
				onClick={this.handleClick}
			>
				{/* {this.props.children} */}
				{this.props.link.label}
			</div>
		);
	};
}

export default Link;
