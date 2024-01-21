import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import Header from './Header';
const Weather = React.lazy(() => import('./Weather'));
const DailyForecast = React.lazy(() => import('./DailyForecast'));
import {useAppDispatch, useAppSelector} from '../ReduxToolkit/hooks';
import Search from './Search';
import {handleLocationData} from '../utils/locationUtils';
import {setLocationCoords} from '../ReduxToolkit/Reducers/reducers';
import {fetchLocationString} from '../ReduxToolkit/Reducers/locationStringSlice';
import {fetchCurrentWeather} from '../ReduxToolkit/Reducers/currentWeatherSlice';
import {fetchHourWeather} from '../ReduxToolkit/Reducers/hourlyWeatherSlice';
import {fetchDailyWeather} from '../ReduxToolkit/Reducers/dailyWeatherSlice';

const WeatherMemoized = React.memo(Weather);
const DailyForecastMemoized = React.memo(DailyForecast);

export default function App() {
  const dispatch = useAppDispatch();
  const selectedForecast = useAppSelector(
    state => state.setState.selectedForecast,
  );
  const searchClicked = useAppSelector(state => state.setState.searchClicked);
  const locationCoords = useAppSelector(state => state.setState.locationCoords);
  const {locationData} = useAppSelector(state => state.locationReducer);
  const {currentWeather} = useAppSelector(state => state.currentWeather);
  const {hourWeather} = useAppSelector(state => state.hourWeather);
  const {dailyWeather} = useAppSelector(state => state.dailyWeather);

  useEffect(() => {
    handleLocationData(dispatch, setLocationCoords);
  }, []);

  useEffect(() => {
    if (locationCoords.lat !== undefined && locationCoords.long !== undefined) {
      dispatch(fetchLocationString(locationCoords));
    }
  }, [locationCoords]);
  useEffect(() => {
    if (locationData.id !== null && locationData.id !== undefined) {
      dispatch(fetchCurrentWeather(locationData.id));
      dispatch(fetchHourWeather(locationData.id));
      // dispatch(fetchDailyWeather(locationData.id));
    }
  }, [locationData]);


  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={'#E1D3FA'} barStyle={'dark-content'} />
      {searchClicked === true ? (
        <Search />
      ) : (
        <>
          <Header />
          <View style={styles.mainContainer}>
            <ScrollView>
              {selectedForecast === 'today' && (
                <React.Suspense fallback={<Text> Loading</Text>}>
                  <WeatherMemoized />
                </React.Suspense>
              )}
              {selectedForecast === 'tomorrow' && (
                <React.Suspense fallback={<Text> Loading</Text>}>
                  <WeatherMemoized />
                </React.Suspense>
              )}
              {selectedForecast === 'daily' && (
                <View style={styles.forecastWrapper}>
                  <React.Suspense fallback={<Text> Loading</Text>}>
                    <DailyForecastMemoized />
                  </React.Suspense>
                </View>
              )}
            </ScrollView>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#F6EDFF',
  },
  forecastWrapper: {
    flex: 1,
  },
});
