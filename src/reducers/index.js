import { combineReducers } from 'redux';

import * as project from 'reducers/project';
import * as projectPreferences from 'reducers/project-preferences';
import * as workflows from 'reducers/workflows';
import * as login from 'reducers/login';
import * as classifications from 'reducers/classifications';
import * as subjects from 'reducers/subjects';

const reducers = Object.assign({},
  classifications, login, project, projectPreferences, subjects, workflows);

export default combineReducers(reducers);
