import { combineReducers } from 'redux';

import * as classifications from 'reducers/classifications';
import * as login from 'reducers/login';
import * as project from 'reducers/project';
import * as projectPreferences from 'reducers/project-preferences';
import * as subjects from 'reducers/subjects';
import * as recents from 'reducers/recents';
import * as workflows from 'reducers/workflows';

const reducers = Object.assign({},
  classifications, login, project, projectPreferences, recents, subjects, workflows);

export default combineReducers(reducers);
