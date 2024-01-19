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
import {
  checkLocationPermission,
  getIPLocation,
  getLocationCoordinates,
  requestLocationPermission,
} from '../Api/locationUtils';
import {setLocationData} from '../ReduxToolkit/Reducers/reducers';

const WeatherMemoized = React.memo(Weather);
const DailyForecastMemoized = React.memo(DailyForecast);

export default function App() {
  const dispatch = useAppDispatch();
  const selectedForecast = useAppSelector(
    state => state.selectedComponentReducer.selectedForecast,
  );
  const searchClicked = useAppSelector(
    state => state.selectedComponentReducer.searchClicked,
  );
  const locationData = useAppSelector(
    state => state.selectedComponentReducer.locationData,
  );

  const handleLocationData = async () => {
    //Check for location permission
    const permissionGranted = await checkLocationPermission();
    if (permissionGranted) {
      const coordinates = await getLocationCoordinates();
      dispatch(setLocationData({...coordinates}));
    } else {
      // if not granted then request
      const reqPermission = await requestLocationPermission();
      if (reqPermission) {
        const coordinates = await getLocationCoordinates();
        dispatch(setLocationData({...coordinates}));
      } else {
        const coordinates = await getIPLocation();
        dispatch(setLocationData({...coordinates}));
      }
    }
  };

  useEffect(() => {
    handleLocationData();
  }, []);

  useEffect(() => {
    console.log(locationData);
  }, [locationData]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        backgroundColor={'#E1D3FA'}
        // backgroundColor={searchClicked ? '#F6EDFF' : '#E1D3FA'}
        barStyle={'dark-content'}
      />
      {searchClicked === true ? (
        <Search />
      ) : (
        <>
          <Header />
          <ScrollView>
            <View style={styles.mainContainer}>
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
            </View>
          </ScrollView>
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
    minHeight: 650,
  },
});
