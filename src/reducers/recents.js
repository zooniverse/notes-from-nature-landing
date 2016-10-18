import * as type from 'constants/actions';
import * as status from 'constants/statuses';

const initialState = {
  status: status.FETCH_READY,
  recents: [],
};

export function recents(state = initialState, action) {
  switch (action.type) {

    case type.RECENTS_REQUESTED:
      return Object.assign({}, state, { status: status.FETCH_REQUESTED });

    case type.RECENTS_RECEIVED:
      return Object.assign({}, state, {
        status: status.FETCH_COMPLETED,
        recents: action.json,
      });

    default:
      return state;
  }
}
