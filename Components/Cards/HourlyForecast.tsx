import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../../Styles/HourlyForecastStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {useAppSelector} from '../../ReduxToolkit/hooks';
import {timeStringConvertor} from '../../utils/dateTimeUtils';
import {hourType} from '../../ReduxToolkit/Reducers/hourlyWeatherSlice';

const HourlyForecast = ({hourCardData}: {hourCardData: Array<hourType>}) => {
  const {locationData} = useAppSelector(state => state.locationReducer);
  const selectedForecast = useAppSelector(
    state => state.setState.selectedForecast,
  );
  const [options, setOptions] = useState<Intl.DateTimeFormatOptions>({});
  const [startIndex, setStartIndex] = useState<number>(0);
  const [stopIndex, setStopIndex] = useState<number>(6);
  useEffect(() => {
    if (locationData.timezone !== undefined) {
      setOptions({
        hour: '2-digit',
        timeZone: locationData?.timezone,
      });
    }
  }, [locationData]);

  useEffect(() => {
    if (selectedForecast === 'tomorrow') {
      setStartIndex(7);
      setStopIndex(13);
    }
  }, [selectedForecast]);

  return (
    <View style={styles.hourlyContainer}>
      <View style={styles.headingContainer}>
        <View style={styles.iconWrapper}>
          <FontAwesomeIcon icon={faClock} size={16} />
        </View>
        <Text style={styles.headingText}>Hourly</Text>
      </View>
      <View style={styles.hourlyTempsWrapper}>
        {hourCardData &&
          hourCardData.slice(startIndex, stopIndex).map(item => (
            <View key={item.time} style={styles.hourTempsContainer}>
              <Text style={[styles.hourTempText]}>
                {timeStringConvertor(item.time, options)}
              </Text>
              <Image
                source={require('../../assets/icons/d320.png')}
                style={styles.weatherIcons}
              />
              <Text style={[styles.hourTempText, {fontSize: 16}]}>
                {item.temperature}°
              </Text>
            </View>
          ))}
      </View>
    </View>
  );
};

export default HourlyForecast;
