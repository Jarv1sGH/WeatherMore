import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../../Styles/HourlyForecastStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCloudRain} from '@fortawesome/free-solid-svg-icons';
import RangeIndicator from './Range';
import {useAppSelector} from '../../ReduxToolkit/hooks';
import {timeStringConvertor} from '../../utils/dateTimeUtils';

const RainChance = () => {
  const {locationData} = useAppSelector(state => state.locationReducer);
  const [options, setOptions] = useState<Intl.DateTimeFormatOptions>({});
  useEffect(() => {
    if (locationData.timezone !== undefined) {
      setOptions({
        hour: '2-digit',
        hour12: true,
        timeZone: locationData?.timezone,
      });
    }
  }, [locationData]);
  const {hourWeather} = useAppSelector(state => state.hourWeather);
  return (
    <View style={[styles.hourlyContainer, styles.RainChanceContainer]}>
      <View style={styles.headingContainer}>
        <View style={styles.iconWrapper}>
          <FontAwesomeIcon icon={faCloudRain} size={16} />
        </View>
        <Text style={styles.headingText}>Chance of Rain</Text>
      </View>
      <View>
        {hourWeather.forecast &&
          hourWeather.forecast
            .slice(0, 4)
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
