import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@src/store';

export const selectCuisineIds = createSelector(
  (state: RootState) => state.cuisine.cuisineIds,
  cuisineIds => cuisineIds,
);

export const selectCuisineData = createSelector(
  (state: RootState) => state.cuisine.cuisinesData,
  cuisineData => cuisineData,
);

export const selectors = {
  selectCuisineIds,
};
