import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './counter/CounterSlice.js';
import AuthReducer from './auth/AuthSlice.js';

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    auth: AuthReducer
  }
});
