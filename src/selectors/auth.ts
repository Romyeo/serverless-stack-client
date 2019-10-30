import { createSelector } from 'reselect';
import { state as stateType } from 'store/reducers';

export const selectAuth = (state: stateType) => state.auth;

export const selectAuthSigningIn = createSelector(
  selectAuth,
  auth => auth.signingIn
);

export const selectAuthSigningOut = createSelector(
  selectAuth,
  auth => auth.signingOut
);

export const selectAuthSignedInError = createSelector(
  selectAuth,
  auth => auth.error.signedIn
);

export const selectAuthCheckedError = createSelector(
  selectAuth,
  auth => auth.error.checkedAuth
);

export const selectAuthSignedOutError = createSelector(
  selectAuth,
  auth => auth.error.signedOut
);

export const selectAuthSignedIn = createSelector(
  selectAuth,
  auth => auth.signedIn
);

export const selectAuthSigningUp = createSelector(
  selectAuth,
  auth => auth.signingUp
);

export const selectAuthSignedUp = createSelector(
  selectAuth,
  auth => auth.signedUp
);

export const selectAuthSignedUpError = createSelector(
  selectAuth,
  auth => auth.error.signedUp
);

export const selectAuthActivating = createSelector(
  selectAuth,
  auth => auth.activating
);

export const selectAuthActivated = createSelector(
  selectAuth,
  auth => auth.activated
);

export const selectAuthActivatedError = createSelector(
  selectAuth,
  auth => auth.error.activated
);
