import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			errorMsg: ''
		};
	}

	componentDidMount() {
		// axios({
		// 	method: 'GET',
		// 	url: 'https://jsonplaceholder.typicode.com/posts'
		// })
		// 	.then((res) => console.log(res))
		// 	.catch((err) => console.log(err));
		axios
			.get('https://jsonplaceholder.typicode.com/post')
			.then((res) => {
				console.log(res);
				this.setState({
					posts: res.data
				});
			})
			.catch((err) => {
				console.error(err);
				this.setState({
					errorMsg: 'Error Reteiving Data'
				});
			});
	}

	render() {
		const { posts, errorMsg } = this.state;
		return (
			<div>
				List Of posts
				{posts.length ? posts.map((post) => <div key={post.id}>{post.title}</div>) : null}
				{errorMsg ? <div>{errorMsg}</div> : null}
			</div>
		);
	}
}

export default PostList;
