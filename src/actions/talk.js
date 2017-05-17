import talkClient from 'panoptes-client/lib/talk-client';
import { config } from 'constants/config';
import * as type from 'constants/actions';

function talkRequested() {
  return { type: type.TALK_REQUESTED };
}

function talkReceived(json) {
  return { type: type.TALK_RECEIVED, json };
}

export function fetchTalkUser(userId) {
  return dispatch => {
    dispatch(talkRequested());
    talkClient.type('comments').get(
      { section: `project-${config.projectId}`, page: 1, user_id: userId, sort: '-created_at' }).then(
      json => dispatch(talkReceived(json)));
  };
}
