import apiClient from 'panoptes-client/lib/api-client';
import * as types from 'constants/actions';

function subjectRequested() {
  return { type: types.SUBJECT_REQUESTED };
}

function subjectReceived(json) {
  return { type: types.SUBJECT_RECEIVED, json };
}

export function fetchSubject(subjectId) {
  return dispatch => {
    dispatch(subjectRequested());
    apiClient.type('subjects').get(subjectId)
      .then(json => dispatch(subjectReceived(json)));
  };
}

function subjectsRequested() {
  return { type: types.SUBJECTS_REQUESTED };
}

function subjectsReceived() {
  return { type: types.SUBJECTS_RECEIVED };
}

export function fetchSubjects(subjectIds) {
  return dispatch => {
    dispatch(subjectsRequested());
    subjectIds.forEach(id => dispatch(fetchSubject(id)));
    dispatch(subjectsReceived());
  };
}
