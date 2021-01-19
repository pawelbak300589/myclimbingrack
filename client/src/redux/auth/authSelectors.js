import { createSelector } from "reselect";

const selectAuth = state => state.auth;

export const selectCurrentUser = createSelector(
  [selectAuth],
  (auth) => auth.currentUser
);

export const selectErrors = createSelector(
  [selectAuth],
  (auth) => auth.errors || []
);

export const selectFirstNameErrors = createSelector(
  [selectErrors],
  (errors) => errors.filter(error => error.field === 'firstName')
);

export const selectLastNameErrors = createSelector(
  [selectErrors],
  (errors) => errors.filter(error => error.field === 'lastName')
);

export const selectEmailErrors = createSelector(
  [selectErrors],
  (errors) => errors.filter(error => error.field === 'email')
);

export const selectPasswordErrors = createSelector(
  [selectErrors],
  (errors) => errors.filter(error => error.field === 'password')
);

export const selectConfirmPasswordErrors = createSelector(
  [selectErrors],
  (errors) => errors.filter(error => error.field === 'confirmPassword')
);

export const selectAcceptTermsErrors = createSelector(
  [selectErrors],
  (errors) => errors.filter(error => error.field === 'acceptTerms')
);