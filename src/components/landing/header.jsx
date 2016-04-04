import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class LandingHeader extends Component {
  render() {
    // const { active } = this.props;
    return (
      <div className="landing-header">
        <div className="header-links">
          <span className="first active">Get Started</span>
          <Link to="/">Get Started</Link>
          <Link to="/about">About</Link>
          <a href="https://talk.notesfromnature.org">Discuss</a>
          <a href="https://blog.notesfromnature.org/" className="last" target="_blank">Blog</a>
        </div>
        <div className="login-info">
          <span>Log in Placeholder</span>
        </div>
      </div>
    );
  }
}

LandingHeader.propTypes = {
  active: PropTypes.string,
};
