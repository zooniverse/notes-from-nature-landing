import { apiClient } from 'panoptes-client';
import { config } from 'constants/config';

export const REQUEST_PROJECT_DATA = 'REQUEST_PROJECT_DATA';
function requestProjectData() {
  return { type: REQUEST_PROJECT_DATA };
}

export const RECEIVE_PROJECT_DATA = 'RECEIVE_PROJECT_DATA';
function receiveProjectData(json) {
  return { type: RECEIVE_PROJECT_DATA, json };
}

export function fetchProjectData() {
  return dispatch => {
    dispatch(requestProjectData());
    apiClient.type('projects').get(config.projectId)
      .then(json => dispatch(receiveProjectData(json)));
  };
}
