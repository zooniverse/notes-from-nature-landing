import { combineReducers } from 'redux';

import * as project from './project';
import * as projectPreference from './project-preference';
import * as workflow from './workflow';
import * as login from './login';

const reducers = Object.assign({}, project, workflow, login, projectPreference);
export default combineReducers(reducers);
