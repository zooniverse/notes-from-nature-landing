import apiClient from 'panoptes-client/lib/api-client';
import { config } from 'constants/config';
import * as type from 'constants/actions';

function workflowsRequested() {
  return { type: type.WORKFLOWS_REQUESTED };
}

function workflowsReceived(json) {
  return { type: type.WORKFLOWS_RECEIVED, json };
}

export function fetchWorkflows() {
  const fields = 'active,classifications_count,completeness,' +
    'display_name,finished_at,retirement,subjects_count';
  let page = 1;
  return dispatch => {
    dispatch(workflowsRequested());
    apiClient.type('workflows').get({ project_id: config.projectId, fields, page })
      .then(json => {
        dispatch(workflowsReceived(json));
        for (page = 2; page <= json[0]._meta.workflows.page_count; ++page) {
          apiClient.type('workflows').get({ project_id: config.projectId, fields, page })
            .then(ws => dispatch(workflowsReceived(ws)));
        }
      });
  };
}
