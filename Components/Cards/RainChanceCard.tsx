import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/HourlyForecastStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCloudRain} from '@fortawesome/free-solid-svg-icons';
import RangeIndicator from './Range';

const RainChance = () => {
  return (
    <View style={[styles.hourlyContainer, styles.RainChanceContainer]}>
      <View style={styles.headingContainer}>
        <View style={styles.iconWrapper}>
          <FontAwesomeIcon icon={faCloudRain} size={16} />
        </View>
        <Text style={styles.headingText}>Chance of Rain</Text>
      </View>
      <View>
        <RangeIndicator time={'7 AM'} minValue={0} maxValue={1} />
        <RangeIndicator time={'8 AM'} minValue={0} maxValue={64} />
        <RangeIndicator time={'9 AM'} minValue={0} maxValue={100} />
        <RangeIndicator time={'10 AM'} minValue={0} maxValue={10} />
      </View>
    </View>
  );
};

export default RainChance;
