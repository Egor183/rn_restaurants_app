import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialStateType = {
  isLoggedIn: boolean;
};

const initialState: InitialStateType = {
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const actions = loginSlice.actions;
export const reducer = loginSlice.reducer;
