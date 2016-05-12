import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as action from 'actions/login';
import HeaderAuth from './header/HeaderAuth';

const activeStyle = '#96f132';

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
    const { active, user } = this.props;
    return (
      <div className={ `landing-header ${active === 'landing' ? '' : 'opaque'}` }>
        <div className="header-links">
          <Link className={'first'} activeStyle={{ color: activeStyle }} to="/">Get Started</Link>
          <Link activeStyle={{ color: activeStyle }} to="/about">About</Link>
          <a href="https://talk.notesfromnature.org">Discuss</a>
          <a href="https://blog.notesfromnature.org/" target="_blank">Blog</a>
          {this.props.user
            ? <Link activeStyle={{ color: activeStyle }} to="/field-book">Fieldbook</Link>
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
  initialised: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    user: state.login.user,
    initialised: state.login.initialised,
  };
}
export default connect(mapStateToProps)(Header);
