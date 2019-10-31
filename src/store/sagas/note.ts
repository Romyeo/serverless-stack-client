import { call, fork, put, takeLatest } from 'redux-saga/effects';

import { addNote } from 'services/note';

import { ADD_NOTE } from 'store/types/note';

import { addedErrorNote, addedNote, addingNote } from 'store/actions/note';

import { IAddNoteAction } from 'interfaces/actions/note';

export default [fork(addNoteSaga)];

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
    console.log(err);
    yield put(addedErrorNote(err.message));
  }
}
