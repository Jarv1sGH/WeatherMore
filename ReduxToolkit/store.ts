// store.js
import { configureStore } from '@reduxjs/toolkit';
import selectedComponentReducer from './Reducers/reducers';
import locationStringSlice from './Reducers/locationStringSlice';
import currentWeatherSlice from './Reducers/currentWeatherSlice';
import hourlyWeatherSlice from './Reducers/hourlyWeatherSlice';
import dailyWeatherSlice from './Reducers/dailyWeatherSlice';
import searchLocationSlice from './Reducers/searchLocationSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const locationStringPersistConfig = {
  key: 'locationReducer',
  storage: AsyncStorage,
  whitelist: ['locationData'],
};

const currentWeatherPersistConfig = {
  key: 'currentWeather',
  storage: AsyncStorage,
  whitelist: ['currentWeather'],
};

const hourlyWeatherPersistConfig = {
  key: 'hourWeather',
  storage: AsyncStorage,
  whitelist: ['hourWeather'],
};

const dailyWeatherPersistConfig = {
  key: 'dailyWeather',
  storage: AsyncStorage,
  whitelist: ['dailyWeather'],
};


const store = configureStore({
  reducer: {
    setState: selectedComponentReducer,
    locationReducer: persistReducer(locationStringPersistConfig, locationStringSlice),
    currentWeather: persistReducer(currentWeatherPersistConfig, currentWeatherSlice),
    hourWeather: persistReducer(hourlyWeatherPersistConfig, hourlyWeatherSlice),
    dailyWeather: persistReducer(dailyWeatherPersistConfig, dailyWeatherSlice),
    searchResults: searchLocationSlice,
  },
});


const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store, persistor };
