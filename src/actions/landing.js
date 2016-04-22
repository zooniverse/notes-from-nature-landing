import { apiClient } from 'panoptes-client';
import { config } from 'constants/config';

export const PROJECT_DATA_REQUESTED = 'PROJECT_DATA_REQUESTED';
function projectDataRequested() {
  return { type: PROJECT_DATA_REQUESTED };
}

export const PROJECT_DATA_RECEIVED = 'PROJECT_DATA_RECEIVED';
function projectDataReceived(json) {
  return { type: PROJECT_DATA_RECEIVED, json };
}

export const WORKFLOWS_REQUESTED = 'WORKFLOWS_REQUESTED';
function workflowsRequested() {
  return { type: WORKFLOWS_REQUESTED };
}

export const WORKFLOWS_RECEIVED = 'WORKFLOWS_RECEIVED';
function workflowsReceived(json) {
  return { type: WORKFLOWS_RECEIVED, json };
}

export function fetchProjectData() {
  return dispatch => {
    dispatch(projectDataRequested());
    apiClient.type('projects').get(config.projectId)
      .then(json => dispatch(projectDataReceived(json)));
  };
}

export function fetchWorkflows() {
  return dispatch => {
    dispatch(workflowsRequested());
    apiClient.type('workflows').get({ project_id: config.projectId })
      .then(json => dispatch(workflowsReceived(json)));
  };
}
