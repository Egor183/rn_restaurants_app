import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@src/store';

export const selectRestaurantsIds = createSelector(
  (state: RootState) => state.restaurant.cuisinesRestaurantsIds,
  (state: RootState, cuisineId: string) => cuisineId,
  (cuisinesRestaurantsIds, cuisineId) => {
    const cuisineRestaurantsIds =
      cuisinesRestaurantsIds[cuisineId as keyof typeof cuisinesRestaurantsIds];

    if (!cuisineRestaurantsIds) {
      return [];
    }

    const {open, close} = cuisineRestaurantsIds;

    return [...open, ...close];
  },
);

export const selectRestaurantData = createSelector(
  (state: RootState) => state.restaurant.restaurantsData,
  (state: RootState, restaurantId: string) => restaurantId,
  (restaurantData, restaurantId) =>
    restaurantData[restaurantId as keyof typeof restaurantData],
);

export const selectors = {
  selectRestaurantsIds,
  selectRestaurantData,
};
