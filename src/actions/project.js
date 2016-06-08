import apiClient from 'panoptes-client/lib/api-client';
import { config } from 'constants/config';
import * as types from '../constants/actions';

function projectRequested() {
  return { type: types.PROJECT_REQUESTED };
}

function projectReceived(json) {
  return { type: types.PROJECT_RECEIVED, json };
}

export function fetchProject() {
  return dispatch => {
    dispatch(projectRequested());
    apiClient.type('projects').get(config.projectId)
      .then(json => dispatch(projectReceived(json)));
  };
}
