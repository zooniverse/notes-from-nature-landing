import React, { PropTypes } from 'react';


export const LoggedInUser = ({ logout, user }) =>
  <button className="btn btn-default navbar-btn navbar-right" onClick={ logout }>Logout { user.login }</button>;

LoggedInUser.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
