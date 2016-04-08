import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export default (
	//Home
	<Route path="/" component={App} >
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={PostsNew} />
		<Route path="posts/:id" component={PostsShow} /> 

	</Route>
//posts/:id will be passes to PostsShow as this.props.params.id

);


/**
how to fetch data in redux app


Blog Post App -> React Lifecycle method
//component will mount
when url changes, that is when you change state


weather app
a user would input city name and enter (distinct event)
in response we called action creator which set our action passes through our middleware to our reducers. and then our data flowes back to our UI
*/