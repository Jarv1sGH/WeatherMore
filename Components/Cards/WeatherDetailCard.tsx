import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/ForecastStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const WeatherDetailCard = ({icon, name, value}) => {
  return (
    <View style={styles.weatherDetailCard}>
      <FontAwesomeIcon icon={icon} size={18} />
      <View style={styles.weatherDetailCardInner}>
        <Text style={styles.textColor}>{name}</Text>
        <Text style={styles.textColor}>{value}</Text>
      </View>
    </View>
  );
};

export default WeatherDetailCard;
