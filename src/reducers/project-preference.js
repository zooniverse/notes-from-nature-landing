import * as types from '../constants/project-preference-actions';

const initialState = {
  projectPrefernceFetched: false,
  project: {
  },
};

export function projectPreference(state = initialState, action) {
  let nextState;
  switch (action.type) {

    case types.PROJECT_PREFERENCE_DATA_REQUESTED:
      return Object.assign({}, state, { projectPrefernceFetched: false });

    case types.PROJECT_PREFERENCE_DATA_RECEIVED:
      nextState = Object.assign({}, state, {
        projectPrefernceFetched: true,
        project: action.json,
      });
      return nextState;

    default:
      return state;
  }
}
