import {
  ADD_NOTE,
  ADDED_ERROR_NOTE,
  ADDED_NOTE,
  ADDING_NOTE
} from 'store/types/note';

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
}

export interface IAddingNoteAction {
  type: typeof ADDING_NOTE;
}
