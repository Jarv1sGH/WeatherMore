// store.js
import { configureStore } from '@reduxjs/toolkit';
import selectedComponentReducer from './Reducers/reducers';
import locationStringSlice from './Reducers/locationStringSlice';

const store = configureStore({
  reducer: {
    setState: selectedComponentReducer,
    locationReducer: locationStringSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
