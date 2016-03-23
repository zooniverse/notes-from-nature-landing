import * as actionType from 'actions/landing';

const initialState = {
  isFetching: true,
  project: {},
};

export function landing(state = initialState, action = '') {
  let nextState;
  switch (action.type) {
    case actionType.REQUEST_PROJECT_DATA:
      return Object.assign({}, state, { isFetching: true });

    case actionType.RECEIVE_PROJECT_DATA:
      nextState = Object.assign({}, state, {
        isFetching: false,
        project: action.json,
      });
      return nextState;

    default:
      return state;
  }
}
