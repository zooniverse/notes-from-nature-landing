import * as type from 'constants/actions';
import * as status from 'constants/statuses';

const initialState = {
  status: status.FETCH_READY,
  classifications: [],
};

export function classifications(state = initialState, action) {
  switch (action.type) {

    case type.CLASSIFICATIONS_REQUESTED:
      return Object.assign({}, state, { status: status.FETCH_REQUESTED });

    case type.CLASSIFICATIONS_RECEIVED:
      return Object.assign({}, state, {
        status: status.FETCH_COMPLETED,
        classifications: action.json,
      });

    default:
      return state;
  }
}
