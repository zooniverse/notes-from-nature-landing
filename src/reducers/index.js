import { combineReducers } from 'redux';

import * as login from 'reducers/login';
import * as project from 'reducers/project';
import * as projectPreferences from 'reducers/project-preferences';
import * as recents from 'reducers/recents';
import * as workflows from 'reducers/workflows';

const reducers = Object.assign({}, login, project, projectPreferences, recents, workflows);

export default combineReducers(reducers);
