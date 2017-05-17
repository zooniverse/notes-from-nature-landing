import talkClient from 'panoptes-client/lib/talk-client';
import { config } from 'constants/config';
import * as type from 'constants/actions';

function talkUserRequested() {
  return { type: type.TALK_USER_REQUESTED };
}

function talkUserReceived(json) {
  return { type: type.TALK_USER_RECEIVED, json };
}

export function fetchTalkUser() {
  console.log('=================================================================================');
  console.log('fetchTalkUser');
  return dispatch => {
    dispatch(talkUserRequested());
    talkClient.type('user').get(config.projectId).then(
      json => dispatch(talkUserReceived(json)));
  };
}
