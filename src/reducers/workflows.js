import * as types from 'constants/actions';
import { initialWorkflows } from 'constants/initial-workflows';

const initialState = {
  workflowsFetched: false,
  allWorkflows: [],
  activeWorkflows: initialWorkflows.activeWorkflows,
  inactiveWorkflows: [],
};

export function workflows(state = initialState, action) {
  switch (action.type) {

    case types.WORKFLOWS_REQUESTED:
      return Object.assign({}, state, { workflowsFetched: false });

    case types.WORKFLOWS_RECEIVED:
      return Object.assign({}, state, {
        workflowsFetched: true,
        allWorkflows: action.json.filter(w => !w.display_name.match(/Template/i)),
        activeWorkflows: action.json.filter(w => w.active),
        inactiveWorkflows: action.json.filter(w => !w.active && !w.display_name.match(/Template/i)),
      });

    default:
      return state;
  }
}
