import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
	render() {
		console.log('pure comp render');
		return (
			<div>
				<h1>PureComponent {this.props.name}</h1>
			</div>
		);
	}
}

export default PureComp;
