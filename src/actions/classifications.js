import apiClient from 'panoptes-client/lib/api-client';
import { config } from 'constants/config';
import * as type from 'constants/actions';
import { fetchSubjects } from 'actions/subjects';
import { getSubjectIds } from 'helpers/subjects';

function classificationsRequested() {
  return { type: type.CLASSIFICATIONS_REQUESTED };
}

function classificationsReceived(json) {
  return { type: type.CLASSIFICATIONS_RECEIVED, json };
}

export function fetchClassifications(userId) {
  return dispatch => {
    dispatch(classificationsRequested());
    apiClient.type('classifications').get({ project_id: config.projectId, user_id: userId })
      .then(json => dispatch(classificationsReceived(json)))
      .then(action => getSubjectIds(action.json))
      .then(ids => dispatch(fetchSubjects(ids)));
  };
}
