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

export const checkAuth = (): ICheckAuthAction => {
  return { type: CHECK_AUTH };
};

export const checkingAuth = (): ICheckingAuthAction => {
  return { type: CHECKING_AUTH };
};

export const checkedAuth = (): ICheckedAuthAction => {
  return { type: CHECKED_AUTH };
};

export const checkedErrorAuth = (error: string): ICheckedErrorAuthAction => {
  return { type: CHECKED_ERROR_AUTH, payload: error };
};

export const signInAuth = (
  email: string,
  password: string
): ISignInAuthAction => {
  return { type: SIGN_IN_AUTH, payload: { email, password } };
};

export const signingInAuth = (): ISigningInAuthAction => {
  return { type: SIGNING_IN_AUTH };
};

export const signedInAuth = (): ISignedInAuthAction => {
  return { type: SIGNED_IN_AUTH };
};

export const signedInErrorAuth = (error: string): ISignedInErrorAuthAction => {
  return { type: SIGNED_IN_ERROR_AUTH, payload: error };
};

export const signOutAuth = (): ISignOutAuthAction => {
  return { type: SIGN_OUT_AUTH };
};

export const signingOutAuth = (): ISigningOutAuthAction => {
  return { type: SIGNING_OUT_AUTH };
};

export const signedOutAuth = (): ISignedOutAuthAction => {
  return { type: SIGNED_OUT_AUTH };
};

export const signedOutErrorAuth = (
  error: string
): ISignedOutErrorAuthAction => {
  return { type: SIGNED_OUT_ERROR_AUTH, payload: error };
};

export const signUpAuth = (
  email: string,
  password: string
): ISignUpAuthAction => {
  return { type: SIGN_UP_AUTH, payload: { email, password } };
};

export const signedUpAuth = (): ISignedUpAuthAction => {
  return { type: SIGNED_UP_AUTH };
};

export const signedUpErrorAuth = (error: string): ISignedUpErrorAuthAction => {
  return { type: SIGNED_UP_ERROR_AUTH, payload: error };
};

export const signingUpAuth = (): ISigningUpAuthAction => {
  return { type: SIGNING_UP_AUTH };
};

export const activateAuth = (
  email: string,
  code: string
): IActivateAuthAction => {
  return { type: ACTIVATE_AUTH, payload: { email, code } };
};

export const activatedAuth = (): IActivatedAuthAction => {
  return { type: ACTIVATED_AUTH };
};

export const activatedErrorAuth = (
  error: string
): IActivatedErrorAuthAction => {
  return { type: ACTIVATED_ERROR_AUTH, payload: error };
};

export const activatingAuth = (): IActivatingAuthAction => {
  return { type: ACTIVATING_AUTH };
};
