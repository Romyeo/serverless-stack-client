import {
  ISaveBillAction,
  ISavedBillAction,
  ISavedErrorBillAction,
  ISavingBillAction
} from 'interfaces/actions/bill';

type BillActionTypesTs =
  | ISaveBillAction
  | ISavedBillAction
  | ISavedErrorBillAction
  | ISavingBillAction;

export default BillActionTypesTs;
