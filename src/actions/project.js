import apiClient from 'panoptes-client/lib/api-client';
import { config } from 'constants/config';
import * as type from 'constants/actions';
import { fetchWorkflows } from 'actions/workflows';

function projectRequested() {
  return { type: type.PROJECT_REQUESTED };
}

function projectReceived(json) {
  return { type: type.PROJECT_RECEIVED, json };
}

export function fetchProject() {
  return dispatch => {
    dispatch(projectRequested());
    apiClient.type('projects').get(config.projectId)
      .then(json => dispatch(projectReceived(json)))
      .then(() => dispatch(fetchWorkflows()));
  };
}
