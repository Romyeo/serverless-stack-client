import {
  IActivateAuthAction,
  IActivatedAuthAction,
  IActivatedErrorAuthAction,
  IActivatingAuthAction,
  ICheckAuthAction,
  ICheckedAuthAction,
  ICheckedErrorAuthAction,
  ICheckingAuthAction,
  ISignedInAuthAction,
  ISignedInErrorAuthAction,
  ISignedOutAuthAction,
  ISignedOutErrorAuthAction,
  ISignedUpAuthAction,
  ISignedUpErrorAuthAction,
  ISignInAuthAction,
  ISigningInAuthAction,
  ISigningOutAuthAction,
  ISigningUpAuthAction,
  ISignOutAuthAction,
  ISignUpAuthAction
} from 'interfaces/actions/auth';

type AuthActionTypes =
  | ICheckAuthAction
  | ICheckedAuthAction
  | ICheckedErrorAuthAction
  | ICheckingAuthAction
  | ISignInAuthAction
  | ISignOutAuthAction
  | ISignedInAuthAction
  | ISignedInErrorAuthAction
  | ISignedOutAuthAction
  | ISignedOutErrorAuthAction
  | ISigningInAuthAction
  | ISigningOutAuthAction
  | ISignUpAuthAction
  | ISignedUpAuthAction
  | ISignedUpErrorAuthAction
  | ISigningUpAuthAction
  | IActivateAuthAction
  | IActivatedAuthAction
  | IActivatedErrorAuthAction
  | IActivatingAuthAction;

export default AuthActionTypes;
