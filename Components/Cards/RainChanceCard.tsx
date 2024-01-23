import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../../Styles/HourlyForecastStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCloudRain} from '@fortawesome/free-solid-svg-icons';
import RangeIndicator from './Range';
import {useAppSelector} from '../../ReduxToolkit/hooks';
import {timeStringConvertor} from '../../utils/dateTimeUtils';
import {hourType} from '../../ReduxToolkit/Reducers/hourlyWeatherSlice';

const RainChance = ({hourCardData}: {hourCardData: Array<hourType>}) => {
  const {locationData} = useAppSelector(state => state.locationReducer);
  const selectedForecast = useAppSelector(
    state => state.setState.selectedForecast,
  );
  const [options, setOptions] = useState<Intl.DateTimeFormatOptions>({});
  const [startIndex, setStartIndex] = useState<number>(0);
  const [stopIndex, setStopIndex] = useState<number>(4);
  useEffect(() => {
    if (locationData.timezone !== undefined) {
      setOptions({
        hour: '2-digit',
        hour12: true,
        timeZone: locationData?.timezone,
      });
    }
  }, [locationData]);
  useEffect(() => {
    if (selectedForecast === 'tomorrow') {
      setStartIndex(7);
      setStopIndex(11);
    }
  }, [selectedForecast]);

  return (
    <View style={[styles.hourlyContainer, styles.RainChanceContainer]}>
      <View style={styles.headingContainer}>
        <View style={styles.iconWrapper}>
          <FontAwesomeIcon icon={faCloudRain} size={16} />
        </View>
        <Text style={styles.headingText}>Chance of Rain</Text>
      </View>
      <View>
        {hourCardData &&
          hourCardData
            .slice(startIndex, stopIndex)
            .map(item => (
              <RangeIndicator
                key={item.time}
                time={timeStringConvertor(item.time, options)}
                minValue={0}
                maxValue={item.precipProb}
              />
            ))}
      </View>
    </View>
  );
};

export default RainChance;
