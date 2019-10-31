import { call, fork, put, takeLatest } from 'redux-saga/effects';

import { activate, check, signIn, signOut, signUp } from 'services/auth';

import {
  ACTIVATE_AUTH,
  CHECK_AUTH,
  SIGN_IN_AUTH,
  SIGN_OUT_AUTH,
  SIGN_UP_AUTH
} from 'store/types/auth';

import {
  activatedAuth,
  activatedErrorAuth,
  activatingAuth,
  checkedAuth,
  checkedErrorAuth,
  checkingAuth,
  signedInAuth,
  signedInErrorAuth,
  signedOutAuth,
  signedOutErrorAuth,
  signedUpAuth,
  signedUpErrorAuth,
  signingInAuth,
  signingOutAuth,
  signingUpAuth
} from 'store/actions/auth';

import {
  ISignInAuthAction,
  ISignUpAuthAction,
  IActivateAuthAction
} from 'interfaces/actions/auth';

export default [
  fork(activateSaga),
  fork(checkAuth),
  fork(signInSaga),
  fork(signOutSaga),
  fork(signUpSaga)
];

function* signInSaga() {
  yield takeLatest(SIGN_IN_AUTH, callSignInSaga);
}

function* callSignInSaga({ payload }: ISignInAuthAction) {
  try {
    yield put(signingInAuth());
    const { email, password } = payload;
    yield call(signIn, email, password);
    yield put(signedInAuth());
  } catch (err) {
    yield put(signedInErrorAuth(err.message));
  }
}

function* checkAuth() {
  yield takeLatest(CHECK_AUTH, callCheckAuthSaga);
}

function* callCheckAuthSaga() {
  try {
    yield put(checkingAuth());
    yield call(check);
    yield put(checkedAuth());
  } catch (err) {
    yield put(checkedErrorAuth(err.message));
  }
}

function* signOutSaga() {
  yield takeLatest(SIGN_OUT_AUTH, callSignOutSaga);
}

function* callSignOutSaga() {
  try {
    yield put(signingOutAuth());
    yield call(signOut);
    yield put(signedOutAuth());
  } catch (err) {
    yield put(signedOutErrorAuth(err.message));
  }
}

function* signUpSaga() {
  yield takeLatest(SIGN_UP_AUTH, callSignUpSaga);
}

function* callSignUpSaga({ payload }: ISignUpAuthAction) {
  try {
    const { email, password } = payload;
    yield put(signingUpAuth());
    yield call(signUp, email, password);
    yield put(signedUpAuth());
  } catch (err) {
    yield put(signedUpErrorAuth(err.message));
  }
}

function* activateSaga() {
  yield takeLatest(ACTIVATE_AUTH, callActivateSaga);
}

function* callActivateSaga({ payload }: IActivateAuthAction) {
  try {
    const { email, code } = payload;
    yield put(activatingAuth());
    yield call(activate, email, code);
    yield put(activatedAuth());
  } catch (err) {
    yield put(activatedErrorAuth(err.message));
  }
}
