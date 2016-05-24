import { combineReducers } from 'redux';

import * as project from './project';
import * as workflow from './workflow';
import * as login from './login';

const reducers = Object.assign({}, project, workflow, login);
export default combineReducers(reducers);
