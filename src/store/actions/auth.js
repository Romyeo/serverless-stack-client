import {
  CHECK_AUTH,
  CHECKED_AUTH,
  CHECKED_ERROR_AUTH,
  CHECKING_AUTH,
  SIGN_IN_AUTH,
  SIGN_OUT_AUTH,
  SIGNED_IN_AUTH,
  SIGNED_IN_ERROR_AUTH,
  SIGNED_OUT_AUTH,
  SIGNED_OUT_ERROR_AUTH,
  SIGNING_IN_AUTH,
  SIGNING_OUT_AUTH
} from 'store/types/auth';

export const checkAuth = () => {
  return { type: CHECK_AUTH };
};

export const checkingAuth = () => {
  return { type: CHECKING_AUTH };
};

export const checkedAuth = () => {
  return { type: CHECKED_AUTH };
};

export const checkedErrorAuth = error => {
  return { type: CHECKED_ERROR_AUTH, payload: error };
};

export const signInAuth = (email, password) => {
  return { type: SIGN_IN_AUTH, payload: { email, password } };
};

export const signingInAuth = () => {
  return { type: SIGNING_IN_AUTH };
};

export const signedInAuth = () => {
  return { type: SIGNED_IN_AUTH };
};

export const signedInErrorAuth = error => {
  return { type: SIGNED_IN_ERROR_AUTH, payload: error };
};

export const signOutAuth = () => {
  return { type: SIGN_OUT_AUTH };
};

export const signingOutAuth = () => {
  return { type: SIGNING_OUT_AUTH };
};

export const signedOutAuth = () => {
  return { type: SIGNED_OUT_AUTH };
};

export const signedOutErrorAuth = error => {
  return { type: SIGNED_OUT_ERROR_AUTH, payload: error };
};
