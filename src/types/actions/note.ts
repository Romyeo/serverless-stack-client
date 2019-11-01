import {
  IAddedErrorNoteAction,
  IAddedNoteAction,
  IAddingNoteAction,
  IAddNoteAction,
  IFetchedErrorListNoteAction,
  IFetchedListNoteAction,
  IFetchingListNoteAction,
  IFetchListNoteAction
} from 'interfaces/actions/note';

export type NoteAddActionTypesTs =
  | IAddedErrorNoteAction
  | IAddedNoteAction
  | IAddingNoteAction
  | IAddNoteAction;

export type NoteFetchListActionTypesTs =
  | IFetchedErrorListNoteAction
  | IFetchedListNoteAction
  | IFetchingListNoteAction
  | IFetchListNoteAction;
