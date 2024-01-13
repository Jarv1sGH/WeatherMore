import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../Styles/ForecastStyles';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCloudRain,
  faDroplet,
  faGauge,
  faSmog,
  faSun,
  faSunPlantWilt,
  faWater,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import WeatherDetailCard from './Cards/WeatherDetailCard';

// type weatherDataArrType = [
//   {
//     name: string;
//     value: string;
//     icon: IconProp;
//   },
// ];
export default function Weather() {
  const weatherDetailCardData = [
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
              <FontAwesomeIcon icon={faSmog} size={70} />
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
    </View>
  );
}
