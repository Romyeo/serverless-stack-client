import { call, fork, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { addNote, fetchNotes, fetchNote, deleteNote } from 'services/note';

import {
  ADD_NOTE,
  DELETE_NOTE,
  FETCH_LIST_NOTE,
  FETCH_NOTE,
  DELETED_NOTE,
  ADDED_NOTE
} from 'store/types/note';

import {
  addedErrorNote,
  addedNote,
  addingNote,
  deletedErrorNote,
  deletedNote,
  deletingNote,
  fetchedErrorListNote,
  fetchedErrorNote,
  fetchedListNote,
  fetchedNote,
  fetchingListNote,
  fetchingNote,
  fetchListNote
} from 'store/actions/note';

import INote from 'interfaces/general/note';

import {
  IAddNoteAction,
  IDeleteNoteAction,
  IFetchNoteAction
} from 'interfaces/actions/note';

export default [
  fork(addNoteSaga),
  fork(deleteNoteSaga),
  fork(fetchListNoteSaga),
  fork(fetchNoteSaga),
  fork(listenNoteSaga)
];

function* addNoteSaga() {
  yield takeLatest(ADD_NOTE, callAddNoteSaga);
}

function* callAddNoteSaga({ payload }: IAddNoteAction) {
  try {
    yield put(addingNote());
    const { note, attachment } = payload;
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

function* deleteNoteSaga() {
  yield takeLatest(DELETE_NOTE, callDeleteNoteSaga);
}

function* callDeleteNoteSaga({ payload }: IDeleteNoteAction) {
  try {
    yield put(deletingNote());
    const { id, fileName } = payload;
    yield call(deleteNote, id, fileName);
    yield put(deletedNote());
  } catch (err) {
    yield put(deletedErrorNote(err.message));
  }
}

function* listenNoteSaga() {
  yield takeEvery([DELETED_NOTE, ADDED_NOTE], callListenNoteSaga);
}

function* callListenNoteSaga() {
  yield put(fetchListNote());
  yield put(push('/'));
}
