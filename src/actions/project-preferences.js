import apiClient from 'panoptes-client/lib/api-client';
import { config } from 'constants/config';
import * as types from 'constants/actions';

function projectPreferencesRequested() {
  return { type: types.PROJECT_PREFERENCES_REQUESTED };
}

function projectPreferencesReceived(json) {
  return { type: types.PROJECT_PREFERENCES_RECEIVED, json };
}

export function fetchProjectPreferences(userId) {
  return dispatch => {
    dispatch(projectPreferencesRequested());
    apiClient.type('project_preferences').get({ project_id: config.projectId, user_id: userId })
      .then(json => dispatch(projectPreferencesReceived(json)));
  };
}

function oldProjectPreferencesRequested() {
  return { type: types.OLD_PROJECT_PREFERENCES_REQUESTED };
}

function oldProjectPreferencesReceived(json) {
  return { type: types.OLD_PROJECT_PREFERENCES_RECEIVED, json };
}

export function fetchOldProjectPreferences(userId) {
  return dispatch => {
    dispatch(oldProjectPreferencesRequested());
    apiClient.type('project_preferences').get({ project_id: config.oldProjectId, user_id: userId })
      .then(json => dispatch(oldProjectPreferencesReceived(json)));
  };
}
