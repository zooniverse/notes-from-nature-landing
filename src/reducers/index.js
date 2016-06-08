import { combineReducers } from 'redux';

import * as project from './project';
import * as projectPreferences from './project-preferences';
import * as workflows from './workflows';
import * as login from './login';
import * as classifications from './classifications';

const reducers = Object.assign({}, classifications, login, project, projectPreferences, workflows);
export default combineReducers(reducers);
