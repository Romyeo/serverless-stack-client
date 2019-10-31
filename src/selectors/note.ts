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
