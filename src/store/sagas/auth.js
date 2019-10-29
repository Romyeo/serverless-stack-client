import { call, fork, put, takeLatest } from 'redux-saga/effects';

import * as authServices from 'services/auth';

import * as authActionTypes from 'store/types/auth';
import * as authActions from 'store/actions/auth';

export default [fork(signInSaga), fork(checkAuth), fork(signOutSaga)];

function* signInSaga() {
  yield takeLatest(authActionTypes.SIGN_IN_AUTH, callSignInSaga);
}

function* callSignInSaga({ payload }) {
  try {
    yield put(authActions.signingInAuth());
    const { email, password } = payload;
    yield call(authServices.signIn, email, password);
    yield put(authActions.signedInAuth(email));
  } catch (err) {
    yield put(authActions.signedInErrorAuth(err.message));
  }
}

function* checkAuth() {
  yield takeLatest(authActionTypes.CHECK_AUTH, callCheckAuthSaga);
}

function* callCheckAuthSaga() {
  try {
    yield put(authActions.checkingAuth());
    yield call(authServices.check);
    yield put(authActions.checkedAuth());
  } catch (err) {
    yield put(authActions.checkedErrorAuth(err.message));
  }
}

function* signOutSaga() {
  yield takeLatest(authActionTypes.SIGN_OUT_AUTH, callSignOutSaga);
}

function* callSignOutSaga() {
  try {
    yield put(authActions.signingOutAuth());
    yield call(authServices.signOut);
    yield put(authActions.signedOutAuth());
  } catch (err) {
    yield put(authActions.signedOutErrorAuth(err.message));
  }
}
