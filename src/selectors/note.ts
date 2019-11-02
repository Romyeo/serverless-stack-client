import { createSelector } from 'reselect';
import { state as stateType } from 'store/reducers';

export const selectNote = (state: stateType) => state.note;

export const selectNoteAdd = createSelector(
  selectNote,
  note => note.add
);

export const selectNoteAdding = createSelector(
  selectNoteAdd,
  add => add.adding
);

export const selectNoteAdded = createSelector(
  selectNoteAdd,
  add => add.added
);

export const selectNoteAddError = createSelector(
  selectNoteAdd,
  add => add.error
);

export const selectNoteList = createSelector(
  selectNote,
  note => note.list
);

export const selectNoteListFetching = createSelector(
  selectNoteList,
  list => list.fetching
);

export const selectNoteListFetched = createSelector(
  selectNoteList,
  list => list.fetched
);

export const selectNoteListInitial = createSelector(
  selectNoteList,
  list => list.initial
);

export const selectNoteListFetchedData = createSelector(
  selectNoteList,
  list => list.notes
);

export const selectNoteListError = createSelector(
  selectNoteList,
  list => list.error
);

export const selectNoteFetch = createSelector(
  selectNote,
  note => note.fetch
);

export const selectNoteFetching = createSelector(
  selectNoteFetch,
  fetch => fetch.fetching
);

export const selectNoteFetched = createSelector(
  selectNoteFetch,
  fetch => fetch.fetched
);

export const selectNoteFetchedData = createSelector(
  selectNoteFetch,
  fetch => fetch.note
);

export const selectNoteFetchError = createSelector(
  selectNoteFetch,
  fetch => fetch.error
);

export const selectNoteDelete = createSelector(
  selectNote,
  note => note.delete
);

export const selectNoteDeleting = createSelector(
  selectNoteDelete,
  del => del.deleting
);

export const selectNoteDeleted = createSelector(
  selectNoteDelete,
  del => del.deleted
);

export const selectNoteDeleteError = createSelector(
  selectNoteDelete,
  del => del.error
);
