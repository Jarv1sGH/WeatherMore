// store.js
import { configureStore } from '@reduxjs/toolkit';
import selectedComponentReducer from './Reducers/reducers';

const store = configureStore({
  reducer: {
    selectedComponentReducer: selectedComponentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
