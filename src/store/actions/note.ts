import INote from 'interfaces/general/note';

import {
  ADD_NOTE,
  ADDED_NOTE,
  ADDED_ERROR_NOTE,
  ADDING_NOTE,
  FETCH_LIST_NOTE,
  FETCHED_ERROR_LIST_NOTE,
  FETCHED_LIST_NOTE,
  FETCHING_LIST_NOTE
} from 'store/types/note';

import {
  IAddNoteAction,
  IAddedNoteAction,
  IAddedErrorNoteAction,
  IAddingNoteAction,
  IFetchListNoteAction,
  IFetchedErrorListNoteAction,
  IFetchedListNoteAction,
  IFetchingListNoteAction
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
