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

export const selectNoteListFetchedData = createSelector(
  selectNoteList,
  list => list.notes
);

export const selectNoteListError = createSelector(
  selectNoteList,
  list => list.error
);
