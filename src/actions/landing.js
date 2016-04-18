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

export const REQUEST_WORKFLOWS = 'REQUEST_WORKFLOWS';
function requestWorkflows() {
  return { type: REQUEST_WORKFLOWS };
}

export const RECEIVE_WORKFLOWS = 'RECEIVE_WORKFLOWS';
function receiveWorkflows(json) {
  return { type: RECEIVE_WORKFLOWS, json };
}

export function fetchProjectData() {
  return dispatch => {
    dispatch(requestProjectData());
    apiClient.type('projects').get(config.projectId)
      .then(json => dispatch(receiveProjectData(json)));
  };
}

export function fetchWorkflows() {
  return dispatch => {
    dispatch(requestWorkflows());
    apiClient.type('workflows').get({ project_id: config.projectId })
      .then(json => dispatch(receiveWorkflows(json)));
  };
}
