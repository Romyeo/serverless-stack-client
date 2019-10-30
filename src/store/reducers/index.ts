import { combineReducers } from 'redux';

import authInReducer from 'store/reducers/auth';

const reducers = combineReducers({
  auth: authInReducer
});

export default reducers;

export type state = ReturnType<typeof reducers>;
