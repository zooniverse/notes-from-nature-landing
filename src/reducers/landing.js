import * as actionType from 'actions/landing';

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

export function landing(state = initialState, action = '') {
  let nextState;
  switch (action.type) {
    case actionType.PROJECT_DATA_REQUESTED:
      return Object.assign({}, state, { projectFetched: false });

    case actionType.PROJECT_DATA_RECEIVED:
      nextState = Object.assign({}, state, {
        projectFetched: true,
        project: action.json,
      });
      return nextState;

    case actionType.WORKFLOWS_REQUESTED:
      return Object.assign({}, state, { workflowsFetched: false });

    case actionType.WORKFLOWS_RECEIVED:
      nextState = Object.assign({}, state, {
        workflowsFetched: true,
        workflows: action.json.filter((w) => w.active),
        inactiveWorkflows: action.json.filter((w) => !w.active),
      });
      return nextState;

    default:
      return state;
  }
}
