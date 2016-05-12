import React, { Component, PropTypes } from 'react';


export default class LoginButton extends Component {

  render() {
    const login = this.props.login;
    return (
      <div className="login-info">
        <button type="submit" onClick={login}>Login</button>
      </div>
    );
  }

}

LoginButton.propTypes = {
  login: PropTypes.func.isRequired
};
