import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as action from 'actions/login';

class Header extends Component {
  componentDidMount() {
    this.props.dispatch(action.checkLoginUser());
  }
  render() {
    const { active } = this.props;
    console.log(this.props.user);
    return (
      <div className={ `landing-header ${active === 'landing' ? '' : 'opaque'}` }>
        <div className="header-links">
          <Link className={'first'} activeStyle={{ color: '#96f132' }} to="/">Get Started</Link>
          <Link activeStyle={{ color: '#96f132' }} to="/about">About</Link>
          <a href="https://talk.notesfromnature.org">Discuss</a>
          <a className="last" href="https://blog.notesfromnature.org/" target="_blank">Blog</a>
        </div>
        <div className="login-info">
          <span>Log in Placeholder</span>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func,
  active: PropTypes.string,
  user: PropTypes.object,
  initialised: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    user: state.login.user,
    initialised: state.login.initialised,
  };
}
export default connect(mapStateToProps)(Header);
