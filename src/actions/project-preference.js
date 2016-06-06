import apiClient from 'panoptes-client/lib/api-client';
import { config } from 'constants/config';
import * as types from '../constants/project-preference-actions';

function projectPreferenceDataRequested() {
  return { type: types.PROJECT_PREFERENCE_DATA_REQUESTED };
}

function projectPreferenceDataReceived(json) {
  return { type: types.PROJECT_PREFERENCE_DATA_RECEIVED, json };
}

export function fetchProjectPreferenceData(userId) {
  return dispatch => {
    dispatch(projectPreferenceDataRequested());
    apiClient.type('projects').get({ project_id: config.projectId, user_id: userId })
      .then(json => dispatch(projectPreferenceDataReceived(json)));
  };
}
