import * as types from '../constants/project-preference-actions';

const initialState = {
  projectPrefernceFetched: false,
  activity_count_by_workflow: {},
};

export function projectPreference(state = initialState, action) {
  let nextState;
  switch (action.type) {

    case types.PROJECT_PREFERENCE_DATA_REQUESTED:
      return Object.assign({}, state, { projectPrefernceFetched: false });

    case types.PROJECT_PREFERENCE_DATA_RECEIVED:
      nextState = Object.assign({}, state, {
        projectPrefernceFetched: true,
        activity_count_by_workflow: action.json[0].activity_count_by_workflow,
      });
      return nextState;

    default:
      return state;
  }
}
