import React, { Component } from 'react';
import './body.css';

class Content extends Component {
	state = {};

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
					key={column.id}
					style={{ color: 'black', marginTop: '0', backgroundColor: 'rgb(163,39,39, 0.20)', margin: '1%' }}
				>
					{/* <h2 id={column.id}>Column {column.id}</h2> */}
					<p>{new_columntext}</p>
				</div>
			);
		});
		return columns;
	};

	renderRows = () => {
		let { columns } = this.props;
		let { columns2 } = this.props;
		return (
			<React.Fragment>
				<div className="row">{this.renderColumns('', columns)}</div>
			</React.Fragment>
		);
	};

	render = () => {
		return (
			<React.Fragment>
				<div>{this.renderRows()}</div>
			</React.Fragment>
		);
	};
}

export default Content;
