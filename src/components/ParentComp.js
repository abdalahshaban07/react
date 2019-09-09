import React, { Component, PureComponent } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'abdalah'
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'shaaban'
			});
		}, 3000);
	}

	render() {
		console.log('*************ParentComp render***********');
		return (
			<div>
				<h1>ParentComp</h1>
				<MemoComp name={this.state.name} />
				{/*<RegComp name={this.state.name} />*/}
				{/*<PureComp name={this.state.name} />*/}
			</div>
		);
	}
}

export default ParentComp;
