import { call, fork, put, takeLatest } from 'redux-saga/effects';

import { addNote, fetchNotes, fetchNote } from 'services/note';

import { ADD_NOTE, FETCH_LIST_NOTE, FETCH_NOTE } from 'store/types/note';

import {
  addedErrorNote,
  addedNote,
  addingNote,
  fetchedErrorListNote,
  fetchedErrorNote,
  fetchedListNote,
  fetchedNote,
  fetchingListNote,
  fetchingNote
} from 'store/actions/note';

import INote from 'interfaces/general/note';

import { IAddNoteAction, IFetchNoteAction } from 'interfaces/actions/note';

export default [
  fork(addNoteSaga),
  fork(fetchListNoteSaga),
  fork(fetchNoteSaga)
];

function* addNoteSaga() {
  yield takeLatest(ADD_NOTE, callAddNoteSaga);
}

function* callAddNoteSaga({ payload }: IAddNoteAction) {
  try {
    const { note, attachment } = payload;
    yield put(addingNote());
    yield call(addNote, note, attachment);
    yield put(addedNote());
  } catch (err) {
    yield put(addedErrorNote(err.message));
  }
}

function* fetchListNoteSaga() {
  yield takeLatest(FETCH_LIST_NOTE, callFetchListNoteSaga);
}

function* callFetchListNoteSaga() {
  try {
    yield put(fetchingListNote());
    const notes: INote[] = yield call(fetchNotes);
    yield put(fetchedListNote(notes));
  } catch (err) {
    yield put(fetchedErrorListNote(err.message));
  }
}

function* fetchNoteSaga() {
  yield takeLatest(FETCH_NOTE, callFetchNoteSaga);
}

function* callFetchNoteSaga({ payload }: IFetchNoteAction) {
  try {
    yield put(fetchingNote());
    const note: INote = yield call(fetchNote, payload);
    yield put(fetchedNote(note));
  } catch (err) {
    yield put(fetchedErrorNote(err.message));
  }
}
