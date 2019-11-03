import { SAVED_BILL, SAVED_ERROR_BILL, SAVING_BILL } from 'store/types/bill';

import IBillState from 'interfaces/state/bill';

import BillActionTypesTs from 'types/actions/bill';

const INITIAL_STATE: IBillState = {
  saved: false,
  saving: false,
  error: ''
};

const saveBill = (
  state = INITIAL_STATE,
  action: BillActionTypesTs
): IBillState => {
  switch (action.type) {
    case SAVED_BILL:
      return {
        ...INITIAL_STATE,
        saved: true
      };

    case SAVED_ERROR_BILL:
      return {
        ...INITIAL_STATE,
        error: action.payload
      };

    case SAVING_BILL:
      return {
        ...INITIAL_STATE,
        saving: true
      };

    default:
      return state;
  }
};

export default saveBill;
