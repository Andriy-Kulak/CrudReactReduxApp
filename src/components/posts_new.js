import React, { Component, PropTypes } from 'react';
import { reduxForm} from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {

	//to navigate around our app, we need acces to our router through the parent component
	static contextTypes = {
		router: PropTypes.object
	};

	

		//takes properties from form and passes them to createPost
		onSubmit(props) {
			this.props.createPost(props)
				.then(() => {
					// blog post has been created, navigate the user to the index
					// we navigate by calling this.context.router.push with the
					// new path to navigate to
					this.context.router.push('/');

				});
		}

		render() {
		const {fields: {title, categories, content }, handleSubmit } = this.props;
		//same as-> handleSubmit = this.props.handleSubmit;
		//same as-> title = this.props.fields.title;

		return (
			//ACTION CREATOR passed through handle Submit with the contents of the form
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}> 
				<h3>Create a New Post</h3>

				<div className={`form-group ${title.touched && title.invalid ? 'has-danger ': ''}`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>

				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger ': ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-help">
						{categories.touched ? categories.error : ''}
					</div>
				</div>

				<div className={`form-group ${content.touched && content.invalid ? 'has-danger ': ''}`}>
					<label>Content</label>
					<textarea type="text" className="form-control" {...content} />
					<div className="text-help">
						{content.touched ? content.error : ''}
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};
	//if you are addressing a value, here form becomes invalid until it's true
	if (!values.title) {
		errors.title = 'Enter a username';
	}

	if (!values.categories) {
		errors.categories= 'Enter a category';
	}

	if (!values.title) {
		errors.content = 'Enter a content';
	}


	return errors;
}

//exporting
// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
	form: 'PostsNewForm',       // configuration
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);

//whenever user makes input, redux records it on application state
/**
state === {
	form: {
		PostsNewForm: {
			title: ...,
			categories: ...
		}
	}
}
*/