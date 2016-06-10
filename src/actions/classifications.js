import apiClient from 'panoptes-client/lib/api-client';
import { config } from 'constants/config';
import * as types from 'constants/actions';

function classificationsRequested() {
  return { type: types.CLASSIFICATIONS_REQUESTED };
}

function classificationsReceived(json) {
  return { type: types.CLASSIFICATIONS_RECEIVED, json };
}

export function fetchClassifications(userId) {
  return dispatch => {
    dispatch(classificationsRequested());
    apiClient.type('classifications').get({ project_id: config.projectId, user_id: userId })
      .then(json => dispatch(classificationsReceived(json)));
  };
}
