import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LandingHeader extends Component {
  render() {
    return (
      <div className="landing-header">
        <div className="header-links">
          <span className="first active">Get Started</span>
          <Link to="/about">About</Link>
          <Link to="/about">Discuss</Link>
          <Link to="/about" className="last">Blog</Link>
        </div>
        <div className="login-info">
          <span>Log in Placeholder</span>
        </div>
      </div>
    );
  }
}
