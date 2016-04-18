import Panoptes from 'panoptes-client';
import config from '../constants/config';

export const SET_LOGIN_USER = 'SET_LOGIN_USER';
export function setLoginUser(user) {
  return (dispatch) => {
    dispatch({
      type: SET_LOGIN_USER,
      user,
    });
  };
}

// First thing on app load - check if the user is logged in.
export function checkLoginUser() {
  return (dispatch) => {
    Panoptes.auth.checkCurrent()
      .then((user) => {
        dispatch(setLoginUser(user));
      });
  };
}

// Returns a login page URL for the user to navigate to.
export function loginToPanoptes() {
  return (/* dispatch */) => {
    Panoptes.oauth.signIn(config.panoptesReturnUrl);
  };
}

export function logoutFromPanoptes() {
  return (dispatch) => {
    Panoptes.oauth.signOut()
      .then(user => {
        dispatch(setLoginUser(user));
      });
  };
}
