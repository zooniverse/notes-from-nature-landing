import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { checkLoginUser, loginToPanoptes, logoutFromPanoptes } from '../../actions/login';
import { LoginButton } from './login-button';
import { LogoutButton } from './logout-button';

class HeaderAuth extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    if (!this.props.initialized) {
      this.props.dispatch(checkLoginUser());
    }
  }

  login() {
    return this.props.dispatch(loginToPanoptes());
  }

  logout() {
    this.props.dispatch(logoutFromPanoptes());
  }

  render() {
    return (this.props.user)
    ? <LogoutButton user={this.props.user} logout={this.logout} />
    : <LoginButton login={this.login} />;
  }
}

HeaderAuth.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object,
  initialized: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    user: state.login.user,
    initialized: state.login.initialized,
  };
}
export default connect(mapStateToProps)(HeaderAuth);
