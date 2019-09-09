import React from 'react';

function Colunms() {
	const items = [ { id: 1, title: 't' } ];
	return (
		<React.Fragment>
			{items.map((item) => (
				<React.Fragment key={item.id}>
					<h1>Title</h1>
					<p>{item.title}</p>
				</React.Fragment>
			))}
			<td>name</td>
			<td>Abdalah</td>
		</React.Fragment>
	);
}

export default Colunms;
