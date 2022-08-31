import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CuisineDataType, CuisineStateType} from './types';

type InitialStateType = CuisineStateType;

const initialState: InitialStateType = {
  /*
  it is a safe decision and more scalable than writing default values for a
  CuisineDataType here because we will not select the cuisinesData
  before we don't fetch a cuisine data
  */
  cuisinesData: {} as CuisineDataType,
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
