import apiClient from 'panoptes-client/lib/api-client';
import * as types from 'constants/actions';

function subjectReceived(json) {
  return { type: types.SUBJECT_RECEIVED, json };
}

export function fetchSubject(subjectId) {
  return dispatch => apiClient.type('subjects').get(subjectId)
    .then(json => dispatch(subjectReceived(json)));
}

function subjectsRequested() {
  return { type: types.SUBJECTS_REQUESTED };
}

export function fetchSubjects(subjectIds) {
  return dispatch => {
    dispatch(subjectsRequested());
    subjectIds.forEach(id => dispatch(fetchSubject(id)));
  };
}
