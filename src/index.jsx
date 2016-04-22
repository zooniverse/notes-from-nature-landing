import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { About } from 'components/about';
import App from 'components/app';
import Landing from 'components/landing';
import LandingExpeditionGroup from 'components/landing/expedition-group';
import configureStore from './store';

// Todo: let's find a better way to include Styles,
// currently Styles looks like an unused var to eslint
/* eslint "no-unused-vars": 1 */
import Styles from './styles/main.styl';

const store = configureStore();

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
