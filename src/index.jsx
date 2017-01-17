import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './components/App.jsx';


import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
render(
  ( 
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} >
        </Route>
      </Router>
    </Provider>
    ),
    document.getElementById('app')
);
