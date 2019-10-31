import {
  IAddNoteAction,
  IAddedNoteAction,
  IAddedErrorNoteAction,
  IAddingNoteAction
} from 'interfaces/actions/note';

export type NoteAddActionTypesTs =
  | IAddNoteAction
  | IAddedNoteAction
  | IAddedErrorNoteAction
  | IAddingNoteAction;
