import { ReactStripeElements } from 'react-stripe-elements';

import {
  SAVE_BILL,
  SAVED_BILL,
  SAVED_ERROR_BILL,
  SAVING_BILL
} from 'store/types/bill';

export interface ISaveBillAction {
  type: typeof SAVE_BILL;
  payload: {
    name: string;
    stripe: ReactStripeElements.StripeProps;
    storage: number;
  };
}

export interface ISavedBillAction {
  type: typeof SAVED_BILL;
}

export interface ISavedErrorBillAction {
  type: typeof SAVED_ERROR_BILL;
  payload: string;
}

export interface ISavingBillAction {
  type: typeof SAVING_BILL;
}
