import { combineReducers } from 'redux';

import * as login from 'reducers/login';
import * as project from 'reducers/project';
import * as projectPreferences from 'reducers/project-preferences';
import * as recents from 'reducers/recents';
import * as workflows from 'reducers/workflows';
import * as talk from 'reducers/talk';

const reducers = Object.assign({},
  login, project, projectPreferences, recents, workflows, talk);

export default combineReducers(reducers);
