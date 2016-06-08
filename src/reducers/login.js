import * as types from '../constants/actions';

const initialState = {
  user: {},
  initialized: false,
};

export function login(state = initialState, action) {
  switch (action.type) {

    case types.SET_LOGIN_USER:
      return {
        user: action.user,  // null if logged out.
        initialized: true,  // true once we know if user is logged in/out; false if unknown.
      };

    default:
      return state;
  }
}
