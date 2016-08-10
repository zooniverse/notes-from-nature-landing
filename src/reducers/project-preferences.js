import * as type from 'constants/actions';
import * as status from 'constants/statuses';

const initialState = {
  status: status.FETCH_READY,
  activityByWorkflow: {},
  oldStatus: status.FETCH_READY,
  oldActivityCount: 0,
};

export function projectPreferences(state = initialState, action) {
  switch (action.type) {

    case type.PROJECT_PREFERENCES_REQUESTED:
      return Object.assign({}, state, { status: status.FETCH_REQUESTED });

    case type.PROJECT_PREFERENCES_RECEIVED:
      return Object.assign({}, state, {
        status: status.FETCH_COMPLETED,
        activityByWorkflow: action.json[0].activity_count_by_workflow,
      });

    case type.OLD_PROJECT_PREFERENCES_REQUESTED:
      return Object.assign({}, state, { oldStatus: status.FETCH_REQUESTED });

    case type.OLD_PROJECT_PREFERENCES_RECEIVED:
      return Object.assign({}, state, {
        oldStatus: status.FETCH_COMPLETED,
        oldActivityCount: (action.json[0] || { activity_count: 0 }).activity_count,
      });

    default:
      return state;
  }
}
