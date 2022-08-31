import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CuisineStateType} from './types';

type InitialStateType = CuisineStateType;

const initialState: InitialStateType = {
  cuisinesData: {},
  cuisineIds: [],
};

export const cuisineSlice = createSlice({
  name: 'cuisine',
  initialState,
  reducers: {
    setCuisine: (state, action: PayloadAction<InitialStateType>) => {
      const {cuisineIds, cuisinesData} = action.payload;

      state.cuisineIds = cuisineIds;
      state.cuisinesData = cuisinesData;
    },
  },
});

export const {actions, reducer} = cuisineSlice;
