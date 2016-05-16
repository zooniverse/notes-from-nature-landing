import * as types from '../constants/landing-actions';

const initialState = {
  projectFetched: false,
  project: {
    subjects_count: 0,
    classifiers_count: 0,
  },
  workflowsFetched: false,
  workflows: [],
  inactiveWorkflows: [],
};

export function landing(state = initialState, action) {
  let nextState;
  switch (action.type) {

    case types.PROJECT_DATA_REQUESTED:
      return Object.assign({}, state, { projectFetched: false });

    case types.PROJECT_DATA_RECEIVED:
      nextState = Object.assign({}, state, {
        projectFetched: true,
        project: action.json,
      });
      return nextState;

    case types.WORKFLOWS_REQUESTED:
      return Object.assign({}, state, { workflowsFetched: false });

    case types.WORKFLOWS_RECEIVED:
      nextState = Object.assign({}, state, {
        workflowsFetched: true,
        workflows: action.json.filter(w => w.active),
        inactiveWorkflows: action.json.filter(w => !w.active),
      });
      return nextState;

    default:
      return state;
  }
}
