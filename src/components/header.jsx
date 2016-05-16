import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as action from 'actions/login';
import HeaderAuth from 'header/header-auth';

class Header extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(action.checkLoginUser());
  }

  login() {
    return this.props.dispatch(action.loginToPanoptes());
  }

  logout() {
    this.props.dispatch(action.logoutFromPanoptes());
  }

  render() {
    const { active, inactiveWorkflows, user } = this.props;
    const activeStyle = { color: '#96f132' };
    return (
      <div className={ `landing-header ${active === 'landing' ? '' : 'opaque'}` }>
        <div className="header-links">
          <Link className={'first'} activeStyle={ activeStyle } to="/">Get Started</Link>
          <Link activeStyle={ activeStyle } to="/about">About</Link>
          <a href="https://talk.notesfromnature.org">Discuss</a>
          <a href="https://blog.notesfromnature.org/" target="_blank">Blog</a>
          {inactiveWorkflows.length
            ? <Link activeStyle={ activeStyle } to="/completed-expeditions" className="wide">
                Completed Expeditions
              </Link>
            : ''
          }
          {user
            ? <Link activeStyle={{ color: activeStyle }} to="/field-book">Field Book</Link>
            : ''
          }
          <div className="last">&nbsp;</div>
        </div>
        <HeaderAuth />
      </div>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func,
  active: PropTypes.string,
  user: PropTypes.object,
  initialized: PropTypes.bool,
  inactiveWorkflows: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    user: state.login.user,
    initialized: state.login.initialized,
    inactiveWorkflows: state.landing.inactiveWorkflows,
  };
}
export default connect(mapStateToProps)(Header);
