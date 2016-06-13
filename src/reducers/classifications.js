import * as types from 'constants/actions';

const initialState = {
  classificationsFetched: false,
  classifications: [],
};

export function classifications(state = initialState, action) {
  switch (action.type) {

    case types.CLASSIFICATIONS_REQUESTED:
      return Object.assign({}, state, { classificationsFetched: false });

    case types.CLASSIFICATIONS_RECEIVED:
      return Object.assign({}, state, {
        classificationsFetched: true,
        classifications: action.json,
      });

    default:
      return state;
  }
}
