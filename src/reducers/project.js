import * as type from 'constants/actions';
import * as status from 'constants/statuses';

const initialState = {
  status: status.FETCH_READY,
  project: {
    subjects_count: 0,
    classifiers_count: 0,
    classifications_count: 0,
    retired_subjects_count: 0,
  },
};

export function project(state = initialState, action) {
  switch (action.type) {

    case type.PROJECT_REQUESTED:
      return Object.assign({}, state, { status: status.FETCH_REQUESTED });

    case type.PROJECT_RECEIVED:
      return Object.assign({}, state, { status: status.FETCH_COMPLETED, project: action.json });

    default:
      return state;
  }
}
