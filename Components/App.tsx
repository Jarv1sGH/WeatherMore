import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './Header';
const Weather = React.lazy(() => import('./Weather'));
const DailyForecast = React.lazy(() => import('./DailyForecast'));
import { useAppDispatch, useAppSelector } from '../ReduxToolkit/hooks';
import Search from './Search';
import { handleLocationData } from '../utils/locationUtils';
import {
  setColorPalette,
  setLastFetchTime,
  setLocationCoords,
  setSelectedForecast,
  setLoading
} from '../ReduxToolkit/Reducers/reducers';
import { fetchLocationString } from '../ReduxToolkit/Reducers/locationStringSlice';
import { fetchCurrentWeather } from '../ReduxToolkit/Reducers/currentWeatherSlice';
import { fetchHourWeather } from '../ReduxToolkit/Reducers/hourlyWeatherSlice';
import { fetchDailyWeather } from '../ReduxToolkit/Reducers/dailyWeatherSlice';
import { createWeatherObj } from '../utils/ApiUtils';
import Loader from './Loader';
import { colorPaletteSetter } from '../utils/iconUtils';
import { weatherObjType } from '../utils/Types';
const WeatherMemoized = React.memo(Weather);
const DailyForecastMemoized = React.memo(DailyForecast);

export default function App() {
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [tomorrowWeatherData, setTomorrowWeatherData] =
    useState<weatherObjType | null>(null);

  const { selectedForecast, lastFetchTime, searchClicked, locationCoords, colorPalette, loading } =
    useAppSelector(state => state.setState);
  const { locationData } = useAppSelector(state => state.locationReducer);
  const { currentWeather } = useAppSelector(state => state.currentWeather);
  const { dailyWeather } = useAppSelector(state => state.dailyWeather);
  // const [loading, setLoading] = useState(false)
  const fetchData = (): void => {
    if (locationData.id !== null && locationData.id !== undefined) {
      const funcData = {
        id: locationData.id,
        timezone: locationData.timezone,
      };
      dispatch(fetchCurrentWeather(funcData)).then(() => {
        dispatch(setLoading(false));
      });
      dispatch(fetchHourWeather(funcData));

      // To avoid being rate limited by Api
      setTimeout(() => {
        dispatch(fetchDailyWeather(funcData.id))
      }, 500);
    }

    setRefreshing(false);
    dispatch(setLastFetchTime(new Date().getTime()));
  };

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(setSelectedForecast('today'));
  };

  // sets location coordinates
  useEffect(() => {
    handleLocationData(dispatch, setLocationCoords);
  }, []);

  // uses the location coordinates to fetch the location string id from api
  useEffect(() => {
    if (locationCoords.lat !== undefined && locationCoords.long !== undefined) {
      dispatch(fetchLocationString(locationCoords));
    }
  }, [locationCoords]);

  useEffect(() => {
    fetchData();
  }, [locationData]);

  useEffect(() => {
    // Prevents Unnecessary calls to the API
    if (refreshing === true) {
      // Checking if atleast one minute has passed since the last refresh
      if (new Date().getTime() > (lastFetchTime + 60000)) {
        fetchData();
      }
      else {
        setRefreshing(false);
        return;
      }
    }
  }, [refreshing, lastFetchTime]);


  useEffect(() => {
    const intervalDuration = 900000; // 15mins in milliseconds

    const fetchInterval = setInterval(() => {
      if (lastFetchTime + intervalDuration < new Date().getTime()) {
        fetchData();
      }
    }, intervalDuration);
    return () => {
      clearInterval(fetchInterval);
    };
  }, [lastFetchTime]);

  useEffect(() => {
    if (dailyWeather.forecast[1] !== undefined)
      setTomorrowWeatherData(createWeatherObj(dailyWeather.forecast[1]));
  }, [dailyWeather]);



  useEffect(() => {
    if (selectedForecast === 'today') {
      if (currentWeather?.current?.symbol !== undefined) {
        dispatch(setColorPalette(colorPaletteSetter(currentWeather.current.symbol)))
      }
    }
    if (selectedForecast === 'tomorrow') {
      if (tomorrowWeatherData?.symbol) {
        dispatch(setColorPalette(colorPaletteSetter(tomorrowWeatherData?.symbol)))
      }
    }
    if (selectedForecast === 'daily') {
      dispatch(setColorPalette(colorPaletteSetter('')))
    }

  }, [selectedForecast, currentWeather, tomorrowWeatherData])
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={searchClicked === true ? '#E1D3FA' : colorPalette.headerColor} barStyle={'dark-content'} />

      {
        loading === true ? < Loader /> :
          <>
            {searchClicked === true ? (
              <Search />
            ) : (
              <>
                <Header />
                <View style={styles.mainContainer}>
                  <ScrollView
                    refreshControl={
                      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }>
                    {selectedForecast === 'today' && (
                      <React.Suspense fallback={<Loader />}>
                        <WeatherMemoized weatherData={currentWeather?.current} />
                      </React.Suspense>
                    )}

                    {selectedForecast === 'tomorrow' && (
                      <React.Suspense fallback={<Loader />}>
                        <WeatherMemoized
                          weatherData={tomorrowWeatherData as weatherObjType}
                        />
                      </React.Suspense>
                    )}
                  </ScrollView>
                  {selectedForecast === 'daily' && (
                    <View style={styles.forecastWrapper}>
                      <React.Suspense fallback={<Loader />}>
                        <DailyForecastMemoized
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                        />
                      </React.Suspense>
                    </View>
                  )}
                </View>
              </>
            )}
          </>}
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
    height: 'auto',
  },
});
