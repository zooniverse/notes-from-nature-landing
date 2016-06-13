import * as types from 'constants/actions';

const initialState = {
  projectPrefernceFetched: false,
  activity_count_by_workflow: {},
};

export function projectPreferences(state = initialState, action) {
  switch (action.type) {

    case types.PROJECT_PREFERENCES_REQUESTED:
      return Object.assign({}, state, { projectPrefernceFetched: false });

    case types.PROJECT_PREFERENCES_RECEIVED:
      return Object.assign({}, state, {
        projectPrefernceFetched: true,
        activity_count_by_workflow: action.json[0].activity_count_by_workflow,
      });

    default:
      return state;
  }
}
