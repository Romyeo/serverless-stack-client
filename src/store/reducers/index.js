import { combineReducers } from 'redux';

import authInReducer from './auth';

const reducers = combineReducers({
  auth: authInReducer
});

export default reducers;
