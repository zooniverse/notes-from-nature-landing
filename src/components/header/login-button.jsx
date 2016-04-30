import React, { PropTypes } from 'react';

export const HeaderLoginButton = ({ login }) =>
  <button onClick={ login }>Login</button>;

HeaderLoginButton.propTypes = {
  login: PropTypes.func,
};
