import apiClient from 'panoptes-client/lib/api-client';
import { config } from 'constants/config';
import * as type from 'constants/actions';
import { pages, PAGE_SIZE } from 'helpers/util';

function workflowsRequested(expectedCount) {
  return { type: type.WORKFLOWS_REQUESTED, expectedCount };
}

function workflowsReceived(json) {
  return { type: type.WORKFLOWS_RECEIVED, json };
}

export function fetchWorkflows() {
  return (dispatch, getState) => {
    const expectedCount = getState().project.project.links.workflows.length;
    dispatch(workflowsRequested(expectedCount));
    pages(expectedCount).map(page =>
      apiClient.type('workflows').get({
        project_id: config.projectId,
        fields: 'active,completeness,display_name,finished_at',
        page_size: PAGE_SIZE,
        page,
      }).then(json => dispatch(workflowsReceived(json)))
    );
  };
}
