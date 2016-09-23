import * as type from 'constants/actions';
import * as status from 'constants/statuses';

const initialState = {
  status: status.FETCH_READY,
  expectedCount: 0,
  actualCount: 0,
  allWorkflows: [],
  activeWorkflows: [],
  inactiveWorkflows: [],
};

export function workflows(state = initialState, action) {
  let newState;

  switch (action.type) {

    case type.WORKFLOWS_REQUESTED:
      return Object.assign({}, state, { status: status.FETCH_REQUESTED });

    case type.WORKFLOWS_RECEIVED:
      newState = Object.assign({}, state);
      newState.allWorkflows = state.allWorkflows.concat(
        action.json.filter(w => !w.display_name.match(/Template/i)));
      newState.activeWorkflows = newState.allWorkflows.filter(
        w => w.active && w.completeness !== 1);
      newState.inactiveWorkflows = newState.allWorkflows.filter(w => w.completeness === 1);
      newState.actualCount += action.json.length;
      newState.expectedCount = action.json[0]._meta.workflows.count;
      newState.status = newState.actualCount >= newState.expectedCount
        ? status.FETCH_COMPLETED : status.FETCH_REQUESTED;
      return newState;

    default:
      return state;
  }
}
