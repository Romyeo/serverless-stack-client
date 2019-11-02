import { Reducer } from 'react';
import { combineReducers } from 'redux';
import { History } from 'history';
import {
  connectRouter,
  RouterState,
  LocationChangeAction
} from 'connected-react-router';

import IAuthState from 'interfaces/state/auth';
import INoteState from 'interfaces/state/note';

import authReducer from 'store/reducers/auth';
import noteReducer from 'store/reducers/note';

const reducers = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    note: noteReducer
  });

export default reducers;

export type state = {
  router: Reducer<RouterState, LocationChangeAction>;
  auth: IAuthState;
  note: INoteState;
};
