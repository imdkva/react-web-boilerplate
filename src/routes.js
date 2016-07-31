/**
 * Created by imdkva on 25.07.16.
 */

import React from 'react';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

import App from './containers/App';
import Welcome from './containers/Welcome';
import Todo from './containers/Todo';

export default () => {


  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/welcome" component={Welcome} />
        <Route path="/todo" component={Todo} />
      </Route>
    </Router>
  )

}