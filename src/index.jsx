import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import a11y from 'react-a11y';
import configureStore from 'store';
import * as action from 'actions/landing';
import oauth from 'panoptes-client/lib/oauth';
import { config } from 'constants/config';

import { App } from 'app';
import Landing from 'pages/landing';
import { About } from 'pages/about';
import FieldBook from 'pages/field-book';
import ActiveExpeditions from 'pages/active-expeditions';
import CompletedExpeditions from 'pages/completed-expeditions';

/* eslint "no-unused-vars": 0 */
import Styles from './styles/main.styl';

if (process.env.NODE_ENV === 'staging') { a11y(React); }

const store = configureStore();
store.dispatch(action.fetchProjectData());
store.dispatch(action.fetchWorkflows());

oauth.init(config.panoptesAppId)
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/active-expeditions/:group" component={ActiveExpeditions} />
            <Route path="/completed-expeditions" component={CompletedExpeditions} />
            <Route path="/field-book" component={FieldBook} />
          </Route>
        </Router>
      </Provider>,
      document.getElementById('root')
    );
  });
