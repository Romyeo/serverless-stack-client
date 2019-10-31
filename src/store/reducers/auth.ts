import {
  ACTIVATED_AUTH,
  ACTIVATED_ERROR_AUTH,
  ACTIVATING_AUTH,
  CHECKED_AUTH,
  CHECKED_ERROR_AUTH,
  CHECKING_AUTH,
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

import authActionTypesTs from 'types/actions/auth';

import IAuth from 'interfaces/state/auth';

const INIT_STATE: IAuth = {
  activated: false,
  activating: false,
  checkingAuth: false,
  signedIn: false,
  signedUp: false,
  signingIn: false,
  signingOut: false,
  signingUp: false,
  error: {
    activated: '',
    checkedAuth: '',
    signedIn: '',
    signedOut: '',
    signedUp: ''
  }
};

const merge = <O, N>(obj: O, newObj: N): O => {
  return { ...obj, ...newObj };
};

const auth = (state = INIT_STATE, action: authActionTypesTs): IAuth => {
  switch (action.type) {
    case SIGNING_IN_AUTH:
      return merge(INIT_STATE, {
        signingIn: true,
        error: { ...INIT_STATE.error }
      });

    case SIGNED_IN_AUTH:
      return merge(INIT_STATE, {
        signedIn: true,
        error: { ...INIT_STATE.error }
      });

    case SIGNED_IN_ERROR_AUTH:
      return merge(INIT_STATE, {
        error: merge(INIT_STATE.error, { signedIn: action.payload })
      });

    case CHECKING_AUTH:
      return merge(INIT_STATE, {
        checkingAuth: true,
        error: { ...INIT_STATE.error }
      });

    case CHECKED_AUTH:
      return merge(INIT_STATE, {
        signedIn: true,
        error: { ...INIT_STATE.error }
      });

    case CHECKED_ERROR_AUTH:
      return merge(INIT_STATE, {
        error: merge(INIT_STATE.error, { checkedAuth: action.payload })
      });

    case SIGNING_OUT_AUTH:
      return merge(INIT_STATE, {
        signingOut: true,
        error: { ...INIT_STATE.error }
      });

    case SIGNED_OUT_AUTH:
      return { ...INIT_STATE };

    case SIGNED_OUT_ERROR_AUTH:
      return merge(INIT_STATE, {
        error: merge(INIT_STATE.error, { signedOut: action.payload })
      });

    case SIGNING_UP_AUTH:
      return merge(INIT_STATE, {
        signingUp: true,
        error: { ...INIT_STATE.error }
      });

    case SIGNED_UP_AUTH:
      return merge(INIT_STATE, {
        signedUp: true,
        error: { ...INIT_STATE.error }
      });

    case SIGNED_UP_ERROR_AUTH:
      return merge(INIT_STATE, {
        error: merge(INIT_STATE.error, { signedUp: action.payload })
      });

    case ACTIVATING_AUTH:
      return merge(INIT_STATE, {
        activating: true,
        signedUp: true,
        error: { ...INIT_STATE.error }
      });

    case ACTIVATED_AUTH:
      return merge(INIT_STATE, {
        activated: true,
        signedUp: true,
        error: { ...INIT_STATE.error }
      });

    case ACTIVATED_ERROR_AUTH:
      return merge(INIT_STATE, {
        signedUp: true,
        error: merge(INIT_STATE.error, { activated: action.payload })
      });

    default:
      return state;
  }
};

export default auth;
