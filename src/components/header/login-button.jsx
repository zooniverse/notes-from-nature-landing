import React, { PropTypes } from 'react';

export const LoginButton = ({ login }) =>
  <div className="login-info">
    <button type="submit" onClick={login}>Login</button>
  </div>;

LoginButton.propTypes = {
  login: PropTypes.func.isRequired,
};
