import { combineReducers } from 'redux';

import * as landing from './landing';
import * as login from './login';

const reducers = Object.assign({}, landing, login);
export default combineReducers(reducers);
