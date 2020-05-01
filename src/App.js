import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topnav from './components/Navbar/topnav.jsx';
import Bodies from './components/Body/Bodies.jsx';

class App extends Component {
	state = {
		currenttab: 'Home'
	};

	handleAppCurrentTab = (target) => {
		let { currenttab } = this.state;
		currenttab = target;
		this.setState({ currenttab: currenttab });
		// this.render(); //this line is unncessary
	};

	render = () => {
		return (
			<div className="App">
				<Topnav action={this.handleAppCurrentTab} currenttab={this.state.currenttab} />
				<Bodies currenttab={this.state.currenttab} />
			</div>
		);
	};
}

export default App;
