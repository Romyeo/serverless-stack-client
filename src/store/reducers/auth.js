import {
  CHECKED_AUTH,
  CHECKED_ERROR_AUTH,
  CHECKING_AUTH,
  SIGNED_IN_AUTH,
  SIGNED_IN_ERROR_AUTH,
  SIGNED_OUT_AUTH,
  SIGNED_OUT_ERROR_AUTH,
  SIGNING_IN_AUTH,
  SIGNING_OUT_AUTH
} from 'store/types/auth';

const INIT_STATE = {
  checkingAuth: false,
  signedIn: false,
  signingIn: false,
  signingOut: false,
  error: {
    checkedAuth: '',
    signedIn: '',
    signedOut: ''
  }
};

const merge = (state, newState) => {
  return { ...state, ...newState };
};

const auth = (state = INIT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNING_IN_AUTH:
      return merge(INIT_STATE, {
        signingIn: true,
        error: { ...INIT_STATE.error }
      });

    case SIGNED_IN_AUTH:
      return merge(INIT_STATE, {
        email: payload,
        signedIn: true,
        error: { ...INIT_STATE.error }
      });

    case SIGNED_IN_ERROR_AUTH:
      return merge(INIT_STATE, {
        error: merge(INIT_STATE.error, { signedIn: payload })
      });

    case CHECKED_AUTH:
      return merge(INIT_STATE, {
        signedIn: true,
        error: { ...INIT_STATE.error }
      });

    case CHECKING_AUTH:
      return merge(INIT_STATE, {
        checkingAuth: true,
        error: { ...INIT_STATE.error }
      });

    case CHECKED_ERROR_AUTH:
      return merge(INIT_STATE, {
        error: merge(INIT_STATE.error, { checkedAuth: payload })
      });

    case SIGNED_OUT_AUTH:
      return { ...INIT_STATE };

    case SIGNED_OUT_ERROR_AUTH:
      return merge(INIT_STATE, {
        error: merge(INIT_STATE.error, { signedOut: payload })
      });

    case SIGNING_OUT_AUTH:
      return merge(INIT_STATE, {
        signingOut: true,
        error: { ...INIT_STATE.error }
      });

    default:
      return state;
  }
};

export default auth;
