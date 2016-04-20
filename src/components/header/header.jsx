import React, { PropTypes } from 'react';
import { Link } from 'react-router';
// import { HeaderAuth } from 'HeaderAuth';

// TODO: Put in <HeaderAuth /> control

export const Header = ({ active }) =>
  <div className={ `landing-header ${active === 'about' ? ' opaque' : ''}` }>
    <div className="header-links">
      <Link className={'first'} activeStyle={{ color: '#96f132' }} to="/">Get Started</Link>
      <Link activeStyle={{ color: '#96f132' }} to="/expedition-group">Test</Link>
      <Link activeStyle={{ color: '#96f132' }} to="/about">About</Link>
      <a href="https://talk.notesfromnature.org">Discuss</a>
      <a className="last" href="https://blog.notesfromnature.org/" target="_blank">Blog</a>
    </div>
    <div className="login-info">
      <span>Log in Placeholder</span>
    </div>
  </div>;
// <HeaderAuth />

Header.propTypes = {
  active: PropTypes.string,
};
