import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { About } from 'components/about';
import App from 'components/app';
import Landing from 'components/landing';
import LandingExpeditionGroup from 'components/expedition-group';
import configureStore from 'store';
import * as action from 'actions/landing';
import a11y from 'react-a11y';

/* eslint "no-unused-vars": 1 */
import Styles from './styles/main.styl';

if (process.env.NODE_ENV === 'staging') { a11y(React); }

const store = configureStore();
store.dispatch(action.fetchProjectData());
store.dispatch(action.fetchWorkflows());

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/expedition-group/:group" component={LandingExpeditionGroup} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
