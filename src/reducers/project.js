import * as types from '../constants/actions';

const initialState = {
  projectFetched: false,
  project: {
    subjects_count: 0,
    classifiers_count: 0,
    classifications_count: 0,
    retired_subjects_count: 0,
  },
};

export function project(state = initialState, action) {
  let nextState;
  switch (action.type) {

    case types.PROJECT_REQUESTED:
      return Object.assign({}, state, { projectFetched: false });

    case types.PROJECT_RECEIVED:
      nextState = Object.assign({}, state, {
        projectFetched: true,
        project: action.json,
      });
      return nextState;

    default:
      return state;
  }
}
