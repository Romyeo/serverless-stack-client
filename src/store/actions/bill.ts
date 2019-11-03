import { ReactStripeElements } from 'react-stripe-elements';

import {
  SAVE_BILL,
  SAVED_BILL,
  SAVED_ERROR_BILL,
  SAVING_BILL
} from 'store/types/bill';

import {
  ISaveBillAction,
  ISavedBillAction,
  ISavedErrorBillAction,
  ISavingBillAction
} from 'interfaces/actions/bill';

export const saveBill = (
  storage: number,
  name: string,
  stripe: ReactStripeElements.StripeProps
): ISaveBillAction => {
  return {
    type: SAVE_BILL,
    payload: {
      storage,
      name,
      stripe
    }
  };
};

export const savedBill = (): ISavedBillAction => {
  return {
    type: SAVED_BILL
  };
};

export const savedErrorBill = (error: string): ISavedErrorBillAction => {
  return {
    type: SAVED_ERROR_BILL,
    payload: error
  };
};

export const savingBill = (): ISavingBillAction => {
  return {
    type: SAVING_BILL
  };
};
