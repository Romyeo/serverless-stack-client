import { call, fork, put, takeLatest } from 'redux-saga/effects';

import * as authServices from 'services/auth';

import * as authActionTypes from 'store/types/auth';
import * as authActions from 'store/actions/auth';

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
  yield takeLatest(authActionTypes.SIGN_IN_AUTH, callSignInSaga);
}

function* callSignInSaga({ payload }: ISignInAuthAction) {
  try {
    yield put(authActions.signingInAuth());
    const { email, password } = payload;
    yield call(authServices.signIn, email, password);
    yield put(authActions.signedInAuth());
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

function* signUpSaga() {
  yield takeLatest(authActionTypes.SIGN_UP_AUTH, callSignUpSaga);
}

function* callSignUpSaga({ payload }: ISignUpAuthAction) {
  try {
    const { email, password } = payload;
    yield put(authActions.signingUpAuth());
    yield call(authServices.signUp, email, password);
    yield put(authActions.signedUpAuth());
  } catch (err) {
    yield put(authActions.signedUpErrorAuth(err.message));
  }
}

function* activateSaga() {
  yield takeLatest(authActionTypes.ACTIVATE_AUTH, callActivateSaga);
}

function* callActivateSaga({ payload }: IActivateAuthAction) {
  try {
    const { email, code } = payload;
    yield put(authActions.activatingAuth());
    yield call(authServices.activate, email, code);
    yield put(authActions.activatedAuth());
  } catch (err) {
    yield put(authActions.activatedErrorAuth(err.message));
  }
}
