import * as type from 'constants/actions';

const initialState = {
  subjects: [],
};

export function subjects(state = initialState, action) {
  let newState;

  switch (action.type) {

    case type.SUBJECTS_REQUESTED:
      return Object.assign({}, state, { subjects: [] });

    case type.SUBJECT_RECEIVED:
      newState = Object.assign({}, state);
      newState.subjects.push(action.json);
      return newState;

    default:
      return state;
  }
}
