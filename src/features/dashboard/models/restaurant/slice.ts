import {CuisineRestaurantsType, RestaurantStateType} from './types.d';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialStateType = RestaurantStateType;

const initialState: InitialStateType = {
  // similar situation like a CuisineData in cuisine slice
  cuisineRestaurants: {} as CuisineRestaurantsType,
  restaurantsData: {},
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<InitialStateType>) => {
      const {cuisineRestaurants, restaurantsData} = action.payload;

      state.cuisineRestaurants = cuisineRestaurants;
      state.restaurantsData = restaurantsData;
    },
  },
});

export const {actions, reducer} = restaurantSlice;
