import {
  ADDED_ERROR_NOTE,
  ADDED_NOTE,
  ADDING_NOTE,
  FETCHED_ERROR_LIST_NOTE,
  FETCHED_LIST_NOTE,
  FETCHING_LIST_NOTE
} from 'store/types/note';

import {
  NoteAddActionTypesTs,
  NoteFetchListActionTypesTs
} from 'types/actions/note';

import INoteState from 'interfaces/state/note';
import { combineReducers } from 'redux';

const INIT_STATE_ADD: INoteState['add'] = {
  adding: false,
  added: false,
  error: ''
};

const add = (
  state = INIT_STATE_ADD,
  action: NoteAddActionTypesTs
): INoteState['add'] => {
  switch (action.type) {
    case ADDED_NOTE:
      return { ...INIT_STATE_ADD, added: true };

    case ADDED_ERROR_NOTE:
      return { ...INIT_STATE_ADD, error: action.payload };

    case ADDING_NOTE:
      return { ...INIT_STATE_ADD, adding: true };

    default:
      return state;
  }
};

const INIT_STATE_LIST: INoteState['list'] = {
  fetching: false,
  fetched: false,
  error: '',
  notes: []
};

const list = (
  state = INIT_STATE_LIST,
  action: NoteFetchListActionTypesTs
): INoteState['list'] => {
  switch (action.type) {
    case FETCHED_ERROR_LIST_NOTE:
      return { ...INIT_STATE_LIST, error: action.payload };

    case FETCHED_LIST_NOTE:
      return { ...INIT_STATE_LIST, notes: action.payload };

    case FETCHING_LIST_NOTE:
      return { ...INIT_STATE_LIST, fetching: true };

    default:
      return state;
  }
};

export default combineReducers<INoteState>({
  add,
  list
});
