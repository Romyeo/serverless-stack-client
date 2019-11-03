import { createSelector } from 'reselect';
import { state as stateType } from 'store/reducers';

export const selectBill = (state: stateType) => state.bill;

export const selectBillSaving = createSelector(
  selectBill,
  bill => bill.saving
);

export const selectBillSaved = createSelector(
  selectBill,
  bill => bill.saved
);

export const selectBillError = createSelector(
  selectBill,
  bill => bill.error
);
