import React from 'react';
import { Link } from 'react-router';
import { collections } from 'constants/collections';

export default class App extends React.Component {
  render() {
    return (
      <div className="landing-app">
        <header className="site-header">
          <h1 className="title"></h1>
          <Link to="/about" className="link">About</Link>
        </header>
        <section>
           {React.cloneElement(this.props.children, { collections })}
        </section>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object,
};
