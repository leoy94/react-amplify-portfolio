import React, { Component } from 'react';
import Body from './body.jsx';

class Bodies extends Component {
	state = {
		bodies: [
			{
				className: 'Home',
				active: this.props.currenttab == 'Home' ? true : false,
				columns: [
					{
						id: 'Home-Overview',
						text: (
							<div>
								<h1>Welcome</h1>
								<h1>I'm Layth Yousif,</h1>
								<h1>Software Developer.</h1>
							</div>
						)
					},
					{
						id: 'Home-Image',
						text: 'This is my home tab!' //should change to content
					}
				]
			},
			{
				className: 'Personal',
				active: this.props.currenttab == 'Personal' ? true : false,
				columns: [
					{
						id: 'Personal-1',
						text: (
							<div>
								<h1>Personal</h1>
							</div>
						)
					},
					{
						id: 'Personal-Image',
						text: 'This is my Personal tab!' //should change to content
					}
				]
			},
			{
				className: 'Resume',
				active: this.props.currenttab == 'Resume' ? true : false,
				columns: [
					{
						id: 'Resume-Overview',
						text: (
							<div>
								<h1>Resume</h1>
							</div>
						)
					},
					{
						id: 'This is my Resume tab!',
						text: 'This is my home tab!' //should change to content
					}
				]
			},
			{
				className: 'Portfolio',
				active: this.props.currenttab == 'Portfolio' ? true : false,
				columns: [
					{
						id: 'Portfolio-Overview',
						text: (
							<div>
								<h1>Portfolio</h1>
							</div>
						)
					},
					{
						id: 'Image',
						text: 'This is my Portfolio tab!' //should change to content
					}
				]
			}
		]
	};

	handleActiveBodyState = () => {
		let bodies = this.state.bodies.map((body, index) => {
			if (body.className == this.props.currenttab) {
				body.active = true;
			} else {
				body.active = false;
			}
			return body;
		});

		return bodies;
	};

	renderCurrentBodies = () => {
		this.handleActiveBodyState();
		let currenbodies = this.state.bodies.map((body) => {
			if (body.active != false) {
				return <Body body={body} currenttab={this.props.currenttab} />;
			}
		});

		return currenbodies;
	};

	render() {
		return <React.Fragment>{this.renderCurrentBodies()}</React.Fragment>;
	}
}

export default Bodies;
