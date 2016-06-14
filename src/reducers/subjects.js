import * as types from 'constants/actions';

const initialState = {
  count: 0,
  subjects: [],
};

export function subjects(state = initialState, action) {
  let newState;

  switch (action.type) {

    case types.SUBJECTS_REQUESTED:
      return Object.assign({}, state, { subjects: [], count: 0 });

    case types.SUBJECT_RECEIVED:
      newState = Object.assign({}, state);
      newState.subjects.push(action.json);
      newState.count = newState.subjects.length;
      return newState;

    default:
      return state;
  }
}
