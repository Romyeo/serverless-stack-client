import {
  ADD_NOTE,
  ADDED_NOTE,
  ADDED_ERROR_NOTE,
  ADDING_NOTE
} from 'store/types/note';

import {
  IAddNoteAction,
  IAddedNoteAction,
  IAddedErrorNoteAction,
  IAddingNoteAction
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
