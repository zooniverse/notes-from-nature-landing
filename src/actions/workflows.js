import apiClient from 'panoptes-client/lib/api-client';
import { config } from 'constants/config';
import * as type from 'constants/actions';

function workflowsRequested(expectedCount) {
  return { type: type.WORKFLOWS_REQUESTED, expectedCount };
}

function workflowsReceived(json) {
  return { type: type.WORKFLOWS_RECEIVED, json };
}

export function fetchWorkflows() {
  const fields = 'active,completeness,display_name,finished_at';
  let page = 1;
  return dispatch => {
    dispatch(workflowsRequested());
    apiClient.type('workflows').get({ project_id: config.projectId, fields, page })
      .then(json => {
        const pageCount = json[0]._meta.workflows.page_count;
        dispatch(workflowsReceived(json));
        if (pageCount > 1) {
          for (page = 2; page <= pageCount; ++page) {
            apiClient.type('workflows').get({ project_id: config.projectId, fields, page })
              .then(ws => dispatch(workflowsReceived(ws)));
          }
        }
      });
  };
}
