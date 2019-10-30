import {
  ACTIVATE_AUTH,
  ACTIVATED_AUTH,
  ACTIVATED_ERROR_AUTH,
  ACTIVATING_AUTH,
  CHECK_AUTH,
  CHECKED_AUTH,
  CHECKED_ERROR_AUTH,
  CHECKING_AUTH,
  SIGN_IN_AUTH,
  SIGN_OUT_AUTH,
  SIGN_UP_AUTH,
  SIGNED_IN_AUTH,
  SIGNED_IN_ERROR_AUTH,
  SIGNED_OUT_AUTH,
  SIGNED_OUT_ERROR_AUTH,
  SIGNED_UP_AUTH,
  SIGNED_UP_ERROR_AUTH,
  SIGNING_IN_AUTH,
  SIGNING_OUT_AUTH,
  SIGNING_UP_AUTH
} from 'store/types/auth';

export interface ICheckAuthAction {
  type: typeof CHECK_AUTH;
}

export interface ICheckedAuthAction {
  type: typeof CHECKED_AUTH;
}

export interface ICheckedErrorAuthAction {
  type: typeof CHECKED_ERROR_AUTH;
  payload: string;
}

export interface ICheckingAuthAction {
  type: typeof CHECKING_AUTH;
}

export interface ISignInAuthAction {
  type: typeof SIGN_IN_AUTH;
  payload: { email: string; password: string };
}

export interface ISignOutAuthAction {
  type: typeof SIGN_OUT_AUTH;
}

export interface ISignedInAuthAction {
  type: typeof SIGNED_IN_AUTH;
}

export interface ISignedInErrorAuthAction {
  type: typeof SIGNED_IN_ERROR_AUTH;
  payload: string;
}

export interface ISignedOutAuthAction {
  type: typeof SIGNED_OUT_AUTH;
}

export interface ISignedOutErrorAuthAction {
  type: typeof SIGNED_OUT_ERROR_AUTH;
  payload: string;
}

export interface ISigningInAuthAction {
  type: typeof SIGNING_IN_AUTH;
}

export interface ISigningOutAuthAction {
  type: typeof SIGNING_OUT_AUTH;
}

export interface ISignUpAuthAction {
  type: typeof SIGN_UP_AUTH;
  payload: { email: string; password: string };
}

export interface ISignedUpAuthAction {
  type: typeof SIGNED_UP_AUTH;
}

export interface ISignedUpErrorAuthAction {
  type: typeof SIGNED_UP_ERROR_AUTH;
  payload: string;
}

export interface ISigningUpAuthAction {
  type: typeof SIGNING_UP_AUTH;
}

export interface IActivateAuthAction {
  type: typeof ACTIVATE_AUTH;
  payload: { email: string, code: string };
}

export interface IActivatedAuthAction {
  type: typeof ACTIVATED_AUTH;
}

export interface IActivatedErrorAuthAction {
  type: typeof ACTIVATED_ERROR_AUTH;
  payload: string;
}

export interface IActivatingAuthAction {
  type: typeof ACTIVATING_AUTH;
}
