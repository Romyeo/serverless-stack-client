import { all } from 'redux-saga/effects';

import authSagas from './auth';
import noteSagas from './note';

export default function* rootSaga() {
  try {
    yield all([...authSagas, ...noteSagas]);
  } catch (err) {
    console.log('@rootSaga:', err);
    throw err;
  }
}
