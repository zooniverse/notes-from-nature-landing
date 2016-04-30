import React, { PropTypes } from 'react';


export const LoggedInUser = ({ logout, user }) =>
  <button onClick={ logout }>Logout { user.login }</button>;

LoggedInUser.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
