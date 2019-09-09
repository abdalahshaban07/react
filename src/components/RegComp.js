import React, { Component } from 'react';

class RegComp extends Component {
	render() {
		console.log('reg comp render');
		return (
			<div>
				<h1>RegComp {this.props.name}</h1>
			</div>
		);
	}
}

export default RegComp;
