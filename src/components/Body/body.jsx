import React, { Component } from 'react';
import './body.css';
import homeHeader from './home-header-1.jpg';
import './resumetemplate.css';
import Content from './content.jsx';
import './Headshot.png';

class Body extends Component {
	state = {
		rows: []
	};

	render() {
		const { columns } = this.props.body;
		return (
			<React.Fragment>
				{/* {this.renderHeaderTitle()} */}
				<Content columns={columns} currenttab={this.props.currenttab} />
			</React.Fragment>
		);
		// return this.renderBody();
	}
}

export default Body;

// renderHeaderTitle = () => {
// 	let { currenttab } = this.props;

// 	if (currenttab == 'Home') {
// 		return (
// 			<h1 style={{ backgroundColor: 'rgb(163,39,39, 0.90)', color: 'white', marginTop: '0' }}>
// 				{currenttab}
// 			</h1>
// 		);
// 	} else {
// 		return (
// 			<h1
// 				style={{
// 					backgroundColor: 'rgb(51,51,51, 0.90)',
// 					color: 'white',
// 					marginTop: '0',
// 					backgroundRepeat: 'no-repeat',
// 					backgroundSize: 'cover'
// 				}}
// 			>
// 				{currenttab}
// 			</h1>
// 		); //backgroundImage: `url(${homeHeader})`
// 	}
// };
