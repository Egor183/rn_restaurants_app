import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@src/store';

export const selectCuisineIds = createSelector(
  (state: RootState) => state.cuisine.cuisineIds,
  cuisineIds => cuisineIds,
);

const selectCuisinesData = createSelector(
  (state: RootState) => state.cuisine.cuisinesData,
  cuisineData => cuisineData,
);

export const selectCuisineData = createSelector(
  selectCuisinesData,
  (state: RootState, id: string) => id,
  (cuisinesData, id) => cuisinesData[id],
);

export const selectors = {
  selectCuisineIds,
  selectCuisineData,
};
