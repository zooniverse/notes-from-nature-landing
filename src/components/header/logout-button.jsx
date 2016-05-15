import React, { PropTypes } from 'react';

export const LogoutButton = ({ logout, user }) =>
  <div className="login-info">
    <span>{user.login}</span>
    <button type="submit" onClick={logout}>Logout</button>
  </div>;

LogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
