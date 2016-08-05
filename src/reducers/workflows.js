import * as type from 'constants/actions';
import * as status from 'constants/statuses';

const initialState = {
  status: status.FETCH_READY,
  allWorkflows: [],
  activeWorkflows: [],
  inactiveWorkflows: [],
};

export function workflows(state = initialState, action) {
  switch (action.type) {

    case type.WORKFLOWS_REQUESTED:
      return Object.assign({}, state, { status: status.FETCH_REQUESTED });

    case type.WORKFLOWS_RECEIVED:
      return Object.assign({}, state, {
        status: status.FETCH_COMPLETED,
        allWorkflows: action.json.filter(w => !w.display_name.match(/Template/i)),
        activeWorkflows: action.json.filter(w => w.active),
        inactiveWorkflows: action.json.filter(w => !w.active &&
          !w.display_name.match(/Template/i) && w.completeness === 1),
      });

    default:
      return state;
  }
}
