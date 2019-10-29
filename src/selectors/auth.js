import { createSelector } from 'reselect';

export const selectAuth = state => state.auth;

export const selectAuthEmail = createSelector(
  selectAuth,
  auth => auth.email
);

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
