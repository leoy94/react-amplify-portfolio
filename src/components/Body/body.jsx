import React, { Component } from 'react';
import './body.css';
import homeHeader from './home-header-1.jpg';

class Body extends Component {
	state = {
		currenttab: this.props.currenttab,
		rows: [],
		columns: [
			{ id: 1, text: 'Hello My Name is Layth Yousif' },
			{ id: 2, text: '' },
			{ id: 3, text: '' },
			{ id: 4, text: '' }
		],
		columns2: [ { id: 5, text: '' } ],
		columnsperrow: 3
	};

	//this method is currently not utalized
	getwindowsize = () => {
		let width = window.outerWidth;
		console.log(width);
		return width;
	};

	//if the current tab is th home tab set the styling background color to red
	//else set the background to a grey
	renderHeaderTitle = () => {
		let { currenttab } = this.props;

		if (currenttab == 'Home') {
			return (
				<h1 style={{ backgroundColor: 'rgb(163,39,39, 0.90)', color: 'white', marginTop: '0' }}>
					{currenttab}
				</h1>
			);
		} else {
			return (
				<h1
					style={{
						backgroundColor: 'rgb(51,51,51, 0.90)',
						color: 'white',
						marginTop: '0',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover'
					}}
				>
					{currenttab}
				</h1>
			); //backgroundImage: `url(${homeHeader})`
		}
	};

	//return a jsx element that contains the jsx syntax for each column
	renderColumns = (text, columns) => {
		columns = columns.map((column) => {
			//************NOTSURE IF FUNCTIONAL YET */
			if (column.text != '') {
				//do something
			} else {
				column.text =
					' Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
					'Maecenas sit amet pretium urna. Vivamus venenatis velit nec' +
					'neque ultricies, eget elementum magna tristique. Quisque' +
					'vehicula, risus eget aliquam placerat, purus leo tincidunt eros' +
					'eget luctus quam orci in velit. Praesent scelerisque tortor sed' +
					'accumsan convallis.';
			}

			let new_columntext = column.text;

			return (
				<div
					className="column"
					id={column.id}
					style={{ color: 'black', marginTop: '0', backgroundColor: 'rgb(163,39,39, 0.20)', margin: '1%' }}
				>
					<h2 id={column.id}>Column {column.id}</h2>
					<p>{new_columntext}</p>
				</div>
			);
		});
		return columns;
	};

	renderRows = () => {
		let { columns } = this.state;
		let { columns2 } = this.state;
		return (
			<React.Fragment>
				<div className="row">{this.renderColumns('', columns)}</div>
			</React.Fragment>
		);
	};

	renderBody = () => {
		return (
			<div>
				<div>{this.renderHeaderTitle()}</div>
				<div>{this.renderRows()}</div>
			</div>
		);
	};

	render() {
		return this.renderBody();
	}
}

export default Body;
