import { Reducer } from 'react';
import { combineReducers } from 'redux';
import { History } from 'history';
import {
  connectRouter,
  RouterState,
  LocationChangeAction
} from 'connected-react-router';

import IAuthState from 'interfaces/state/auth';
import IBillState from 'interfaces/state/bill';
import INoteState from 'interfaces/state/note';

import authReducer from 'store/reducers/auth';
import noteReducer from 'store/reducers/note';
import billReducer from 'store/reducers/bill';

const reducers = (history: History) =>
  combineReducers({
    auth: authReducer,
    bill: billReducer,
    note: noteReducer,
    router: connectRouter(history)
  });

export default reducers;

export type state = {
  auth: IAuthState;
  bill: IBillState;
  note: INoteState;
  router: Reducer<RouterState, LocationChangeAction>;
};
