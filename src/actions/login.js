import auth from 'panoptes-client/lib/auth';
import oauth from 'panoptes-client/lib/oauth';
import * as types from '../constants/actionTypes';
import { config } from 'constants/config';

// First thing on app load - check if the user is logged in.
export function checkLoginUser() {
  return (dispatch) => {
    auth.checkCurrent()
      .then((user) => {
        dispatch(setLoginUser(user));
      });
  }
}

export function setLoginUser(user) {
  return (dispatch) => {
    dispatch({
      type: types.SET_LOGIN_USER,
      user
    });
  };
}

// Returns a login page URL for the user to navigate to.
export function loginToPanoptes() {
  return (dispatch) => {
    return oauth.signIn(window.location.href.split('#')[0])
  }
}

export function logoutFromPanoptes() {
  return (dispatch) => {
    oauth.signOut()
      .then(user => {
        dispatch(setLoginUser(user));
      });
  }
}
