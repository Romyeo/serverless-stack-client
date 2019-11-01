import INote from 'interfaces/general/note';

import {
  ADD_NOTE,
  ADDED_ERROR_NOTE,
  ADDED_NOTE,
  ADDING_NOTE,
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
  IAddNoteAction,
  IAddedNoteAction,
  IAddedErrorNoteAction,
  IAddingNoteAction,
  IFetchListNoteAction,
  IFetchedErrorListNoteAction,
  IFetchedListNoteAction,
  IFetchingListNoteAction,
  IFetchNoteAction,
  IFetchedErrorNoteAction,
  IFetchedNoteAction,
  IFetchingNoteAction
} from 'interfaces/actions/note';

export const addNote = (note: string, attachment?: File): IAddNoteAction => {
  return {
    type: ADD_NOTE,
    payload: { note, attachment }
  };
};

export const addedNote = (): IAddedNoteAction => {
  return {
    type: ADDED_NOTE
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

export const fetchListNote = (): IFetchListNoteAction => {
  return {
    type: FETCH_LIST_NOTE
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

export const fetchedListNote = (notes: INote[]): IFetchedListNoteAction => {
  return {
    type: FETCHED_LIST_NOTE,
    payload: notes
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
