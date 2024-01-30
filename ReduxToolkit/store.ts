// store.js
import { configureStore } from '@reduxjs/toolkit';
import selectedComponentReducer from './Reducers/reducers';
import locationStringSlice from './Reducers/locationStringSlice';
import currentWeatherSlice from './Reducers/currentWeatherSlice';
import hourlyWeatherSlice from './Reducers/hourlyWeatherSlice';
import dailyWeatherSlice from './Reducers/dailyWeatherSlice';
import searchLocationSlice from './Reducers/searchLocationSlice';


const store = configureStore({
  reducer: {
    setState: selectedComponentReducer,
    locationReducer: locationStringSlice,
    currentWeather: currentWeatherSlice,
    hourWeather: hourlyWeatherSlice,
    dailyWeather: dailyWeatherSlice,
    searchResults: searchLocationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
