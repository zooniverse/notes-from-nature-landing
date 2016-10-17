import apiClient from 'panoptes-client/lib/api-client';
import { config } from 'constants/config';
import * as type from 'constants/actions';

function recentsRequested() {
  return { type: type.RECENTS_REQUESTED };
}

function recentsReceived(json) {
  return { type: type.RECENTS_RECEIVED, json };
}

export function fetchRecents(userId) {
  return (dispatch) => {
    dispatch(recentsRequested());
    apiClient.type('users').get(`${userId}/recents`,
      { project_id: config.projectId, sort: '-created_at', page_size: 6 })
      .then(json => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.log(json);
        return dispatch(recentsReceived(json));
      })
      .then(action => {
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log(action);
      });
  };
}
