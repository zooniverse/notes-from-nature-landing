import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import a11y from 'react-a11y';
import configureStore from 'store';
import oauth from 'panoptes-client/lib/oauth';
import { config } from 'constants/config';

import App from 'app';
import Landing from 'pages/landing';
import FieldBook from 'pages/field-book';
import ActiveExpeditions from 'pages/active-expeditions';
import CompletedExpeditions from 'pages/completed-expeditions';
import CompletedExpeditionGroup from 'pages/completed-expedition-group';

import Styles from 'styles/main.styl';  // eslint-disable-line no-unused-vars

if (process.env.NODE_ENV === 'staging') { a11y(React); }

const store = configureStore();

oauth.init(config.panoptesAppId)
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Landing} />
            <Route path="/active-expeditions/:group" component={ActiveExpeditions} />
            <Route path="/completed-expeditions" component={CompletedExpeditions} />
            <Route path="/completed-expedition-group/:group" component={CompletedExpeditionGroup} />
            <Route path="/field-book" component={FieldBook} />
          </Route>
        </Router>
      </Provider>,
      document.getElementById('root')
    );
  });
