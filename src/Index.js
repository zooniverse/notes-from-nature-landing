import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import About from './components/About';
import Landing from './components/Landing';

// Todo: let's find a better way to include Styles,
// currently Styles looks like an unused var to eslint
/* eslint "no-unused-vars": 1 */
import Styles from './styles/main.styl';

window.React = React;

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Landing}/>
      <Route path="/subCollections" component={PoweredBy}/>
      <Route path="/about" component={About}/>
      <Route path="/poweredby" component={PoweredBy}/>
    </Route>
  </Router>
  , document.getElementById('root')
);
