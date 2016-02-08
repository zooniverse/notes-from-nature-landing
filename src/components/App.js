import React from 'react';
import { Link } from 'react-router';
import packageJSON from '../../package.json';

import Data from '../data.js';

export default class App extends React.Component {
  returnSomething(something) {
    // this is only for testing purposes. Check /test/components/App-test.js
    return something;
  }
  render() {
    const version = packageJSON.version;

    return (
      <div>
        <header className="site-header">
          <h1 className="title"><a href="/">React Starterify {version}</a></h1>
          <Link to="/about" className="link">About</Link>
          <Link to="/poweredby" className="link">Powered by</Link>
        </header>
        <section className="content-section">
          <div>{React.cloneElement(this.props.children, { data: Data })}</div>
        </section>
      </div>
    );
  }
}
App.propTypes = {
  children: React.PropTypes.object,
};
