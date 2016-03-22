import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import About from './components/About';
import App from './components/App';
import Landing from './components/Landing';
import Subcollections from './components/Subcollections';
import configureStore from './store';

// Todo: let's find a better way to include Styles,
// currently Styles looks like an unused var to eslint
/* eslint "no-unused-vars": 1 */
import Styles from './styles/main.styl';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="/subcollections/:index" component={Subcollections}/>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
