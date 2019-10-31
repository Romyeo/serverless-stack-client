import { combineReducers } from 'redux';

import authReducer from 'store/reducers/auth';
import noteReducer from 'store/reducers/note';

const reducers = combineReducers({
  auth: authReducer,
  note: noteReducer
});

export default reducers;

export type state = ReturnType<typeof reducers>;
