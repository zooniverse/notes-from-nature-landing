import * as types from '../constants/actionTypes';

const initialState = {
  data: {
    attributes: {
      metadata: {}
    }
  },
  loading: false };

export function users(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_USER:
      return Object.assign({}, state, {
        loading: true,
      });
      case types.RECEIVE_USER:
      return Object.assign({}, state, {
        data: action.data,
        loading: false,
      });
    case types.UPSERT_TEACHER_METADATA:
      return Object.assign({}, state, {
        data: action.data,
        loading: true,
      });
    case types.UPSERT_TEACHER_METADATA_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        loading: false,
      });
    default:
      return state;
  }
}
