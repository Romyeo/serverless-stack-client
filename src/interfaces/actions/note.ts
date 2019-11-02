import {
  ADD_NOTE,
  ADDED_ERROR_NOTE,
  ADDED_NOTE,
  ADDING_NOTE,
  DELETE_NOTE,
  DELETED_ERROR_NOTE,
  DELETED_NOTE,
  DELETING_NOTE,
  FETCH_LIST_NOTE,
  FETCH_NOTE,
  FETCHED_ERROR_LIST_NOTE,
  FETCHED_ERROR_NOTE,
  FETCHED_LIST_NOTE,
  FETCHED_NOTE,
  FETCHING_LIST_NOTE,
  FETCHING_NOTE,
  UPDATE_NOTE,
  UPDATED_ERROR_NOTE,
  UPDATED_NOTE,
  UPDATING_NOTE
} from 'store/types/note';

import INote from 'interfaces/general/note';

export interface IAddNoteAction {
  type: typeof ADD_NOTE;
  payload: { note: string; attachment?: File };
}

export interface IAddedErrorNoteAction {
  type: typeof ADDED_ERROR_NOTE;
  payload: string;
}

export interface IAddedNoteAction {
  type: typeof ADDED_NOTE;
  payload?: boolean;
}

export interface IAddingNoteAction {
  type: typeof ADDING_NOTE;
}

export interface IFetchListNoteAction {
  type: typeof FETCH_LIST_NOTE;
  payload?: boolean;
}

export interface IFetchedErrorListNoteAction {
  type: typeof FETCHED_ERROR_LIST_NOTE;
  payload: string;
}

export interface IFetchedListNoteAction {
  type: typeof FETCHED_LIST_NOTE;
  payload: { fetched?: boolean; notes: INote[] };
}

export interface IFetchingListNoteAction {
  type: typeof FETCHING_LIST_NOTE;
}

export interface IFetchNoteAction {
  type: typeof FETCH_NOTE;
  payload: string;
}
export interface IFetchedErrorNoteAction {
  type: typeof FETCHED_ERROR_NOTE;
  payload: string;
}
export interface IFetchedNoteAction {
  type: typeof FETCHED_NOTE;
  payload: INote;
}
export interface IFetchingNoteAction {
  type: typeof FETCHING_NOTE;
}

export interface IDeleteNoteAction {
  type: typeof DELETE_NOTE;
  payload: { id: string; fileName?: string };
}

export interface IDeletedErrorNoteAction {
  type: typeof DELETED_ERROR_NOTE;
  payload: string;
}

export interface IDeletedNoteAction {
  type: typeof DELETED_NOTE;
  payload?: boolean;
}

export interface IDeletingNoteAction {
  type: typeof DELETING_NOTE;
}

export interface IUpdateNoteAction {
  type: typeof UPDATE_NOTE;
  payload: { note: INote; attachment?: File };
}
export interface IUpdatedErrorNoteAction {
  type: typeof UPDATED_ERROR_NOTE;
  payload: string;
}
export interface IUpdatedNoteAction {
  type: typeof UPDATED_NOTE;
  payload: { updated?: boolean; id?: string };
}
export interface IUpdatingNoteAction {
  type: typeof UPDATING_NOTE;
}
