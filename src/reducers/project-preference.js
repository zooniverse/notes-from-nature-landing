import * as types from '../constants/project-preference-actions';

const initialState = {
  projectPrefernceFetched: false,
  mock: {
    workflows: [
      { 2382: { count: 5 } },   // Inactive - Bugs
      { 2318: { count: 6 } },   // Mint
      { 2321: { count: 7 } },   // Laurel
      { 2322: { count: 8 } },   // USF
      { 2324: { count: 9 } },   // Pinned
      { 2399: { count: 10 } },   // Butterflies
    ],
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
        mock: Object.assign({}, action.json, initialState.mock),
      });
      return nextState;

    default:
      return state;
  }
}
