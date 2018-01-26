import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import App from './containers/App/App';
import Home from './containers/Home/Home';
// import { AppContainer } from 'react-hot-loader'

export default [
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}></IndexRoute>
      </Route>
    </Router>
]
