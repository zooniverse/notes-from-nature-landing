import * as actionType from 'actions/landing';

const initialState = {
  isFetchingProject: true,
  project: {
    subjects_count: 0,
    classifiers_count: 0,
  },
  isFetchingWorkflows: true,
  workflows: [],
  inactiveWorkflows: [],
};

export function landing(state = initialState, action = '') {
  let nextState;
  switch (action.type) {
    case actionType.PROJECT_DATA_REQUESTED:
      return Object.assign({}, state, { isFetchingProject: true });

    case actionType.PROJECT_DATA_RECEIVED:
      nextState = Object.assign({}, state, {
        isFetchingProject: false,
        project: action.json,
      });
      return nextState;

    case actionType.WORKFLOWS_REQUESTED:
      return Object.assign({}, state, { isFetchingWorkflows: true });

    case actionType.WORKFLOWS_RECEIVED:
      nextState = Object.assign({}, state, {
        isFetchingWorkflows: false,
        workflows: action.json.filter((w) => w.active),
        inactiveWorkflows: action.json.filter((w) => !w.active),
      });
      return nextState;

    default:
      return state;
  }
}
