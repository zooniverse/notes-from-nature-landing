import * as types from 'constants/actions';

const initialState = {
  projectPreferenceFetched: false,
  activityByWorkflow: {},
  oldProjectPreferenceFetched: false,
  oldActivityCount: 0,
};

export function projectPreferences(state = initialState, action) {
  switch (action.type) {

    case types.PROJECT_PREFERENCES_REQUESTED:
      return Object.assign({}, state, { projectPreferenceFetched: false });

    case types.PROJECT_PREFERENCES_RECEIVED:
      return Object.assign({}, state, {
        projectPreferenceFetched: true,
        activityByWorkflow: action.json[0].activity_count_by_workflow,
      });

    case types.OLD_PROJECT_PREFERENCES_REQUESTED:
      return Object.assign({}, state, { oldProjectPreferenceFetched: false });

    case types.OLD_PROJECT_PREFERENCES_RECEIVED:
      return Object.assign({}, state, {
        oldProjectPreferenceFetched: true,
        oldActivityCount: (action.json[0] || { activity_count: 0 }).activity_count,
      });

    default:
      return state;
  }
}
