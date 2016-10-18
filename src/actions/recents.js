import * as type from 'constants/actions';
import { config } from 'constants/config';
import { RECENTS_LIST_LENGTH } from 'helpers/recents';

function recentsRequested() {
  return { type: type.RECENTS_REQUESTED };
}

function recentsReceived(json) {
  return { type: type.RECENTS_RECEIVED, json };
}

export function fetchRecents() {
  return (dispatch, getState) => {
    dispatch(recentsRequested());
    getState().login.user.get('recents',
      { project_id: config.projectId, sort: '-created_at', page_size: RECENTS_LIST_LENGTH })
    .then(json => dispatch(recentsReceived(json)));
  };
}
