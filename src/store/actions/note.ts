import INote from 'interfaces/general/note';

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
  FETCHING_NOTE
} from 'store/types/note';

import {
  IAddedErrorNoteAction,
  IAddedNoteAction,
  IAddingNoteAction,
  IAddNoteAction,
  IFetchedErrorListNoteAction,
  IFetchedErrorNoteAction,
  IFetchedListNoteAction,
  IFetchedNoteAction,
  IFetchingListNoteAction,
  IFetchingNoteAction,
  IFetchListNoteAction,
  IFetchNoteAction,
  IDeletedErrorNoteAction,
  IDeletedNoteAction,
  IDeleteNoteAction,
  IDeletingNoteAction
} from 'interfaces/actions/note';

export const addNote = (note: string, attachment?: File): IAddNoteAction => {
  return {
    type: ADD_NOTE,
    payload: { note, attachment }
  };
};

export const addedNote = (added?: boolean): IAddedNoteAction => {
  return {
    type: ADDED_NOTE,
    payload: added
  };
};

export const addedErrorNote = (error: string): IAddedErrorNoteAction => {
  return {
    type: ADDED_ERROR_NOTE,
    payload: error
  };
};

export const addingNote = (): IAddingNoteAction => {
  return {
    type: ADDING_NOTE
  };
};

export const fetchListNote = (initial?: boolean): IFetchListNoteAction => {
  return {
    type: FETCH_LIST_NOTE,
    payload: initial
  };
};

export const fetchedErrorListNote = (
  error: string
): IFetchedErrorListNoteAction => {
  return {
    type: FETCHED_ERROR_LIST_NOTE,
    payload: error
  };
};

export const fetchedListNote = (
  notes: INote[],
  fetched?: boolean
): IFetchedListNoteAction => {
  return {
    type: FETCHED_LIST_NOTE,
    payload: { notes, fetched }
  };
};

export const fetchingListNote = (): IFetchingListNoteAction => {
  return {
    type: FETCHING_LIST_NOTE
  };
};

export const fetchNote = (id: string): IFetchNoteAction => {
  return {
    type: FETCH_NOTE,
    payload: id
  };
};

export const fetchedErrorNote = (error: string): IFetchedErrorNoteAction => {
  return {
    type: FETCHED_ERROR_NOTE,
    payload: error
  };
};

export const fetchedNote = (note: INote): IFetchedNoteAction => {
  return {
    type: FETCHED_NOTE,
    payload: note
  };
};

export const fetchingNote = (): IFetchingNoteAction => {
  return {
    type: FETCHING_NOTE
  };
};

export const deleteNote = (
  id: string,
  fileName?: string
): IDeleteNoteAction => {
  return {
    type: DELETE_NOTE,
    payload: {
      id,
      fileName
    }
  };
};

export const deletedErrorNote = (error: string): IDeletedErrorNoteAction => {
  return {
    type: DELETED_ERROR_NOTE,
    payload: error
  };
};

export const deletedNote = (deleted?: boolean): IDeletedNoteAction => {
  return {
    type: DELETED_NOTE,
    payload: deleted
  };
};

export const deletingNote = (): IDeletingNoteAction => {
  return {
    type: DELETING_NOTE
  };
};
