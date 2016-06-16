import apiClient from 'panoptes-client/lib/api-client';
import { config } from 'constants/config';
import * as types from 'constants/actions';

function workflowsRequested() {
  return { type: types.WORKFLOWS_REQUESTED };
}

function workflowsReceived(json) {
  return { type: types.WORKFLOWS_RECEIVED, json };
}

export function fetchWorkflows() {
  return dispatch => {
    dispatch(workflowsRequested());
    apiClient.type('workflows').get({
      project_id: config.projectId,
      active: true,
      fields: 'active,completeness,display_name,finished_at',
    }).then(json => dispatch(workflowsReceived(json)));
  };
}
