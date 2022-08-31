import {configureStore} from '@reduxjs/toolkit';
import {loginReducer} from '@src/features/authentication/models/login';
import {cuisineReducer} from '@src/features/dashboard/models/cuisine';
import {restaurantReducer} from './features/dashboard/models/restaurant';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    cuisine: cuisineReducer,
    restaurant: restaurantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
