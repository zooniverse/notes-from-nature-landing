import React, { PropTypes } from 'react';

export const HeaderLoggedIn = ({ logout, user }) =>
  <button onClick={ logout }>Logout { user.login }</button>;

HeaderLoggedIn.propTypes = {
  logout: PropTypes.func,
  user: PropTypes.object,
};
