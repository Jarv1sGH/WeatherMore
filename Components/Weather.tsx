import {Text, View, Image} from 'react-native';
import React from 'react';
import {styles} from '../Styles/WeatherStyles';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCloudRain,
  faDroplet,
  faGauge,
  faSunPlantWilt,
  faWater,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import WeatherDetailCard from './Cards/WeatherDetailCard';
import HourlyForecast from './Cards/HourlyForecast';
import DayForecast from './Cards/WeekForecast';

type weatherDataType = {
  name: string;
  value: string;
  icon: IconProp;
};

export default function Weather() {
  // Array to map weather detail cards
  const weatherDetailCardData: Array<weatherDataType> = [
    {
      name: 'Wind Speed',
      value: '12 kmph',
      icon: faWind,
    },
    {
      name: 'Rain Chance',
      value: '12%',
      icon: faCloudRain,
    },
    {
      name: 'Humidity',
      value: '90%',
      icon: faWater,
    },
    {
      name: 'Dew Point',
      value: '9',
      icon: faDroplet,
    },
    {
      name: 'UV Index',
      value: '4 moderate',
      icon: faSunPlantWilt,
    },
    {
      name: 'Pressure',
      value: '1 bar',
      icon: faGauge,
    },
  ];

  return (
    <View style={styles.weatherOuter}>
      <View style={styles.weatherContainer}>
        <View style={styles.weatherDetails}>
          <Text style={[styles.lastUpdateTime, styles.textColor]}>
            January 13, 02:17
          </Text>
          <View style={styles.tempWrapper}>
            <View>
              <View style={styles.tempInnerWrapper}>
                <Text style={[styles.temperature, styles.textColor]}>13</Text>
                <Text style={[styles.unit, styles.textColor]}>°C</Text>
              </View>
              <Text style={[styles.textColor, styles.textWidth]}>
                Feels like 11°
              </Text>
            </View>

            <View style={styles.icon}>
              <Image
                style={styles.weatherIcon}
                source={require('./../assets/icons/d320.png')}
              />
              <Text>Rain</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.weatherDetailCardsWrapper}>
        {weatherDetailCardData.map(item => (
          <WeatherDetailCard
            key={item.name}
            icon={item.icon}
            name={item.name}
            value={item.value}
          />
        ))}
      </View>
      <View>
        <HourlyForecast />
        <DayForecast />
      </View>
    </View>
  );
}
