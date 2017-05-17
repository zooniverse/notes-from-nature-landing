import * as type from 'constants/actions';
import * as status from 'constants/statuses';

const initialState = {
  status: status.FETCH_READY,
  talkUser: {
  },
};

export function talkUser(state = initialState, action) {
  switch (action.type) {

    case type.TALK_USER_REQUESTED:
      return Object.assign({}, state, { status: status.FETCH_REQUESTED });

    case type.TALK_USER_RECEIVED:
      return Object.assign({}, state, { status: status.FETCH_COMPLETED, talkUser: action.json });

    default:
      return state;
  }
}
