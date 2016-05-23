import apiClient from 'panoptes-client/lib/api-client';
import { config } from 'constants/config';
import * as types from '../constants/project-actions';

function projectDataRequested() {
  return { type: types.PROJECT_DATA_REQUESTED };
}

function projectDataReceived(json) {
  return { type: types.PROJECT_DATA_RECEIVED, json };
}

export function fetchProjectData() {
  return dispatch => {
    dispatch(projectDataRequested());
    apiClient.type('projects').get(config.projectId)
      .then(json => dispatch(projectDataReceived(json)));
  };
}
