import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from '../../Styles/HourlyForecastStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons';

const HourlyForecast = () => {
  return (
    <View style={styles.hourlyContainer}>
      <View style={styles.headingContainer}>
        <View style={styles.iconWrapper}>
          <FontAwesomeIcon icon={faClock} size={16} />
        </View>
        <Text style={styles.headingText}>Hourly</Text>
      </View>
      <View style={styles.hourlyTempsWrapper}>
        <View style={styles.hourTempsContainer}>
          <Text style={[styles.hourTempText]}>12 am</Text>
          <Image
            source={require('../../assets/icons/d320.png')}
            style={styles.weatherIcons}
          />
          <Text style={[styles.hourTempText, {fontSize: 18}]}>8°</Text>
        </View>
        <View style={styles.hourTempsContainer}>
          <Text style={[styles.hourTempText]}>1 am</Text>
          <Image
            source={require('../../assets/icons/d320.png')}
            style={styles.weatherIcons}
          />
          <Text style={[styles.hourTempText, {fontSize: 20}]}>8°</Text>
        </View>
        <View style={styles.hourTempsContainer}>
          <Text style={[styles.hourTempText]}>2 am</Text>
          <Image
            source={require('../../assets/icons/d320.png')}
            style={styles.weatherIcons}
          />
          <Text style={[styles.hourTempText, {fontSize: 20}]}>8°</Text>
        </View>
        <View style={styles.hourTempsContainer}>
          <Text style={[styles.hourTempText]}>3 am</Text>
          <Image
            source={require('../../assets/icons/d320.png')}
            style={styles.weatherIcons}
          />
          <Text style={[styles.hourTempText, {fontSize: 20}]}>8°</Text>
        </View>
        <View style={styles.hourTempsContainer}>
          <Text style={[styles.hourTempText]}>4 am</Text>
          <Image
            source={require('../../assets/icons/d320.png')}
            style={styles.weatherIcons}
          />
          <Text style={[styles.hourTempText, {fontSize: 20}]}>8°</Text>
        </View>
        <View style={styles.hourTempsContainer}>
          <Text style={[styles.hourTempText]}>5 am</Text>
          <Image
            source={require('../../assets/icons/d320.png')}
            style={styles.weatherIcons}
          />
          <Text style={[styles.hourTempText, {fontSize: 20}]}>8°</Text>
        </View>
      </View>
    </View>
  );
};

export default HourlyForecast;
