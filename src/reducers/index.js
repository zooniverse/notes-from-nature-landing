import { combineReducers } from 'redux';

import * as landing from './landing';

const reducers = Object.assign({}, landing);
export default combineReducers(reducers);
