/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './Components/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './ReduxToolkit/store';
import React from 'react';

const WeatherMore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => WeatherMore);
