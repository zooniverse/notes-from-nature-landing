import * as actionType from 'actions/login';

const initialState = { user: null, initialised: false };

export function login(state = initialState, action = '') {
  switch (action.type) {
    case actionType.SET_LOGIN_USER:
      return {
        user: action.user,  // null if logged out.
        initialised: true,  // true once we know if user is logged in/out; false if unknown.
      };
    default:
      return state;
  }
}
