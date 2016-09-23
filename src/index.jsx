import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import a11y from 'react-a11y';
import configureStore from 'store';
import oauth from 'panoptes-client/lib/oauth';
import { config } from 'constants/config';
import ReactGA from 'react-ga';

import App from 'app';
import Landing from 'pages/landing';
import { About } from 'pages/about';
import FieldBook from 'pages/field-book';
import ActiveExpeditions from 'pages/active-expeditions';
import CompletedExpeditions from 'pages/completed-expeditions';

import Styles from 'styles/main.styl';  // eslint-disable-line no-unused-vars

if (process.env.NODE_ENV === 'staging') { a11y(React); }

const store = configureStore();
ReactGA.initialize('UA-84653239-1');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

oauth.init(config.panoptesAppId)
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <Router onUpdate={logPageView} history={browserHistory}>
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
