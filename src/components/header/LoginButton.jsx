import React, { PropTypes } from 'react';

export const LoginButton = ({ login }) =>
  <button className="btn btn-default navbar-btn navbar-right" onClick={ login }>Login</button>;

LoginButton.propTypes = {
  login: PropTypes.func.isRequired,
};
