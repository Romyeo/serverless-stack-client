import { all } from 'redux-saga/effects';

import authSagas from 'store/sagas/auth';
import billSagas from 'store/sagas/bill';
import noteSagas from 'store/sagas/note';

export default function* rootSaga() {
  try {
    yield all([...authSagas, ...billSagas, ...noteSagas]);
  } catch (err) {
    console.log('@rootSaga:', err);
    throw err;
  }
}
