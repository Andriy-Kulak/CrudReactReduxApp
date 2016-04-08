import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index'; // action creator
import { Link } from 'react-router';


class PostsIndex extends Component {
	//lifecycle method is ran only the first tme the component is rendered.
	componentWillMount() {
		this.props.fetchPosts(); //dispatch the action whenever PostsIndex is rendered to the DOM
	}



	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
				List of Blogs
			</div>
		);
	}
}

// {fetchPosts} is the same as {fetchPosts: fetchPosts}
export default connect(null, {fetchPosts})(PostsIndex);