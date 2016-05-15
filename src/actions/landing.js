import apiClient from 'panoptes-client/lib/api-client';
import { config } from 'constants/config';
import * as types from '../constants/landing-actions';

function projectDataRequested() {
  return { type: types.PROJECT_DATA_REQUESTED };
}

function projectDataReceived(json) {
  return { type: types.PROJECT_DATA_RECEIVED, json };
}

function workflowsRequested() {
  return { type: types.WORKFLOWS_REQUESTED };
}

function workflowsReceived(json) {
  return { type: types.WORKFLOWS_RECEIVED, json };
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
