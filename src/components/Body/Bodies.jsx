import React, { Component } from 'react';
import Body from './body.jsx';

class Bodies extends Component {
	state = {
		bodies: [
			{
				className: 'Home',
				id: 'Home-Body',
				active: this.props.currenttab == 'Home' ? true : false,
				columns: [
					{
						id: 'Home-Overview',
						text: (
							<React.Fragment>
								<div className="text">
									<h1>Welcome,</h1>
									<h1>I'm Layth Yousif,</h1>
									<h1>Software Developer.</h1>
								</div>
								<div className="smallertext">Pega CSSA / CSS / Javascript / React / Python / SQL</div>
							</React.Fragment>
						)
					},
					{
						id: 'Home-HeadShot',
						text: '',
						picture: true //should change to content
					}
				]
			},
			{
				className: 'Personal',
				id: 'Personal-Body',
				active: this.props.currenttab == 'Personal' ? true : false,
				columns: [
					{
						id: 'Personal-Overview',
						text: <h1 id="Personal-Overview-Text">Personal</h1>
					},
					{
						id: 'Personal-Image',
						text: 'This is my Personal tab!' //should change to content
					}
				]
			},
			{
				className: 'Resume',
				id: 'Resume-Body',
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
				id: 'Portfolio-Body',
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
				return <Body key={body.id} id={body.id} body={body} currenttab={this.props.currenttab} />;
			}
		});

		return currenbodies;
	};

	render() {
		return <React.Fragment>{this.renderCurrentBodies()}</React.Fragment>;
	}
}

export default Bodies;
