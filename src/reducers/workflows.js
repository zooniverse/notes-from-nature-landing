import * as types from 'constants/actions';

const initialState = {
  workflowsFetched: false,
  allWorkflows: [],
  activeWorkflows: [],
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
        inactiveWorkflows: action.json.filter(w => !w.active &&
          !w.display_name.match(/Template/i) && w.completeness === 1),
      });

    default:
      return state;
  }
}
