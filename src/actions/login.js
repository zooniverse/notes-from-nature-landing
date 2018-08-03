import oauth from 'panoptes-client/lib/oauth';
import * as type from 'constants/actions';
import { config } from 'constants/config';

export function setLoginUser(user) {
  return (dispatch) => dispatch({ type: type.SET_LOGIN_USER, user });
}

// First thing on app load - check if the user is logged in.
export function checkLoginUser() {
  return (dispatch) => oauth.checkCurrent().then(user => dispatch(setLoginUser(user)));
}

// Returns a login page URL for the user to navigate to.
export function loginToPanoptes() {
  return () => oauth.signIn(config.panoptesReturnUrl);
}

export function logoutFromPanoptes() {
  return (dispatch) => oauth.signOut().then(user => dispatch(setLoginUser(user)));
}
