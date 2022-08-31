import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@src/store';

export const selectIsLoggedIn = createSelector(
  (state: RootState) => state.login.isLoggedIn,
  isLoggedIn => isLoggedIn,
);

export const selectors = {
  selectIsLoggedIn,
};
