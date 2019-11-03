import { call, fork, put, takeLatest } from 'redux-saga/effects';

import { SAVE_BILL } from 'store/types/bill';

import { savedErrorBill, savedBill, savingBill } from 'store/actions/bill';

import { ISaveBillAction } from 'interfaces/actions/bill';
import { billNote } from 'services/note';

export default [fork(saveBillSaga)];

function* saveBillSaga() {
  yield takeLatest(SAVE_BILL, callSaveBillSaga);
}

function* callSaveBillSaga({ payload }: ISaveBillAction) {
  try {
    yield put(savingBill());
    const { stripe, name, storage } = payload;
    const { token, error } = yield call(stripe.createToken, { name });

    if (error && error.message) {
      throw new Error(error.message);
    }

    yield call(billNote, storage, token.id);
    yield put(savedBill());
  } catch (err) {
    yield put(savedErrorBill(err.message));
  }
}
