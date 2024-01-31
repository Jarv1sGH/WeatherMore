/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './Components/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store, persistor} from './ReduxToolkit/store';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';

const WeatherMore = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => WeatherMore);
