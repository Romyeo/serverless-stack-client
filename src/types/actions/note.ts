import {
  IAddedErrorNoteAction,
  IAddedNoteAction,
  IAddingNoteAction,
  IAddNoteAction,
  IDeletedErrorNoteAction,
  IDeletedNoteAction,
  IDeleteNoteAction,
  IDeletingNoteAction,
  IFetchedErrorListNoteAction,
  IFetchedErrorNoteAction,
  IFetchedListNoteAction,
  IFetchedNoteAction,
  IFetchingListNoteAction,
  IFetchingNoteAction,
  IFetchListNoteAction,
  IFetchNoteAction
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

export type NoteFetchActionTypesTs =
  | IFetchedErrorNoteAction
  | IFetchedNoteAction
  | IFetchingNoteAction
  | IFetchNoteAction;

export type NoteDeleteActionTypesTs =
  | IDeleteNoteAction
  | IDeletedErrorNoteAction
  | IDeletedNoteAction
  | IDeletingNoteAction;
