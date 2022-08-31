import {RestaurantStateType} from './types.d';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialStateType = RestaurantStateType;

const initialState: InitialStateType = {
  cuisinesRestaurantsIds: {},
  restaurantsData: {},
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<InitialStateType>) => {
      const {cuisinesRestaurantsIds, restaurantsData} = action.payload;

      state.cuisinesRestaurantsIds = cuisinesRestaurantsIds;
      state.restaurantsData = restaurantsData;
    },
  },
});

export const {actions, reducer} = restaurantSlice;
