import {
  ADDED_ERROR_NOTE,
  ADDED_NOTE,
  ADDING_NOTE,
  DELETED_ERROR_NOTE,
  DELETED_NOTE,
  DELETING_NOTE,
  FETCH_LIST_NOTE,
  FETCHED_ERROR_LIST_NOTE,
  FETCHED_ERROR_NOTE,
  FETCHED_LIST_NOTE,
  FETCHED_NOTE,
  FETCHING_LIST_NOTE,
  FETCHING_NOTE,
  UPDATED_ERROR_NOTE,
  UPDATED_NOTE,
  UPDATING_NOTE
} from 'store/types/note';

import {
  NoteAddActionTypesTs,
  NoteFetchActionTypesTs,
  NoteFetchListActionTypesTs,
  NoteDeleteActionTypesTs,
  NoteUpdateActionTypesTs
} from 'types/actions/note';

import INoteState from 'interfaces/state/note';
import { combineReducers } from 'redux';

const INIT_STATE_ADD: INoteState['add'] = {
  adding: false,
  added: false,
  error: ''
};

const addNote = (
  state = INIT_STATE_ADD,
  action: NoteAddActionTypesTs
): INoteState['add'] => {
  switch (action.type) {
    case ADDED_NOTE:
      return {
        ...INIT_STATE_ADD,
        added: action.payload === undefined ? true : action.payload
      };

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
  initial: false,
  notes: []
};

const listNote = (
  state = INIT_STATE_LIST,
  action: NoteFetchListActionTypesTs
): INoteState['list'] => {
  switch (action.type) {
    case FETCH_LIST_NOTE:
      return { ...INIT_STATE_LIST, initial: true };

    case FETCHED_ERROR_LIST_NOTE:
      return {
        ...INIT_STATE_LIST,
        initial: state.initial,
        error: action.payload
      };

    case FETCHED_LIST_NOTE:
      return {
        ...INIT_STATE_LIST,
        initial: state.initial,
        fetched:
          action.payload.fetched === undefined ? true : action.payload.fetched,
        notes: action.payload.notes
      };

    case FETCHING_LIST_NOTE:
      return { ...INIT_STATE_LIST, initial: state.initial, fetching: true };

    default:
      return state;
  }
};

const INIT_STATE_FETCH: INoteState['fetch'] = {
  fetching: false,
  fetched: false,
  error: '',
  note: {
    noteId: '',
    userId: '',
    createdAt: 0,
    content: ''
  }
};

const fetchNote = (
  state = INIT_STATE_FETCH,
  action: NoteFetchActionTypesTs
): INoteState['fetch'] => {
  switch (action.type) {
    case FETCHED_ERROR_NOTE:
      return { ...INIT_STATE_FETCH, error: action.payload };

    case FETCHED_NOTE:
      return { ...INIT_STATE_FETCH, fetched: true, note: action.payload };

    case FETCHING_NOTE:
      return { ...INIT_STATE_FETCH, fetching: true };

    default:
      return state;
  }
};

const INIT_STATE_DELETE = {
  deleting: false,
  deleted: false,
  error: ''
};

const deleteNote = (
  state = INIT_STATE_DELETE,
  action: NoteDeleteActionTypesTs
): INoteState['delete'] => {
  switch (action.type) {
    case DELETED_ERROR_NOTE:
      return { ...INIT_STATE_DELETE, error: action.payload };

    case DELETED_NOTE:
      return {
        ...INIT_STATE_DELETE,
        deleted: action.payload === undefined ? true : action.payload
      };

    case DELETING_NOTE:
      return { ...INIT_STATE_DELETE, deleting: true };

    default:
      return state;
  }
};

const INIT_STATE_UPDATE: INoteState['update'] = {
  updated: false,
  updating: false,
  error: '',
  id: ''
};

const updateNote = (
  state = INIT_STATE_UPDATE,
  action: NoteUpdateActionTypesTs
): INoteState['update'] => {
  switch (action.type) {
    case UPDATED_ERROR_NOTE:
      return { ...INIT_STATE_UPDATE, error: action.payload };

    case UPDATED_NOTE:
      return {
        ...INIT_STATE_UPDATE,
        id: action.payload.id || '',
        updated:
          action.payload.updated === undefined ? true : action.payload.updated
      };

    case UPDATING_NOTE:
      return { ...INIT_STATE_UPDATE, updating: true };

    default:
      return state;
  }
};

export default combineReducers<INoteState>({
  add: addNote,
  fetch: fetchNote,
  list: listNote,
  delete: deleteNote,
  update: updateNote
});
