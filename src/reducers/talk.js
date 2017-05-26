import * as type from 'constants/actions';
import * as status from 'constants/statuses';

const initialState = {
  status: status.FETCH_READY,
  commentCount: 0,
};

export function talk(state = initialState, action) {
  switch (action.type) {

    case type.TALK_REQUESTED:
      return Object.assign({}, state, { status: status.FETCH_REQUESTED });

    case type.TALK_RECEIVED:
      return Object.assign({}, state, {
        status: status.FETCH_COMPLETED,
        commentCount: action.json.length,
      });

    default:
      return state;
  }
}
