import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import reducers from './reducers';
import routes from './routes';

//router - decides what is rendered on page based on URL
//browserHistory - how  to interpret change in URL (uses all of the URL)
//Other options are hashHistory - anything after a hash will be interpreted and tracked
// 3rd Opt. memoryHistory
import { Router, browserHistory} from 'react-router';

import reducers from './reducers';
import promise from 'redux-promise';


//makes sure our actions flow through middleware before reching the reducers
const createStoreWithMiddleware = applyMiddleware(
	promise
)(createStore);

//figures out how we will be reading the url using our router. refer to above for more info
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
