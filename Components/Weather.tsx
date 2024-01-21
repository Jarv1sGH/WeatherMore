import {Text, View, Image, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../Styles/WeatherStyles';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
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
import RainChance from './Cards/RainChanceCard';
import {weatherObjType} from '../ReduxToolkit/Reducers/currentWeatherSlice';
import {capitalizeFirstLetter, formatDateString} from '../utils/dateTimeUtils';

const WeatherDetailCardMemoized = React.memo(WeatherDetailCard);
const HourlyForecastMemoized = React.memo(HourlyForecast);
const RainChanceMemoized = React.memo(RainChance);
const DayForecastMemoized = React.memo(DayForecast);

type weatherDataType = {
  name: string;
  value: string;
  icon: IconProp;
};

export default function Weather({
  weatherData,
  showHourCard,
}: {
  weatherData: weatherObjType;
  showHourCard: boolean;
}) {
  // useEffect(() => {
  //   console.log(weatherData.sunrise, weatherData.sunset);
  // }, [weatherData]);

  // Array to map weather detail cards
  const weatherDetailCardData: Array<weatherDataType> = [
    {
      name: 'Wind Speed',
      value: `${weatherData?.windSpeed} km/h`,
      icon: faWind,
    },
    {
      name: 'Rain Chance',
      value: `${weatherData?.precipProb} % `,
      icon: faCloudRain,
    },
    {
      name: 'Humidity',
      value: `${weatherData?.relHumidity}% `,
      icon: faWater,
    },
    {
      name: 'Dew Point',
      value: `${weatherData?.dewPoint}°C `,
      icon: faDroplet,
    },
    {
      name: 'UV Index',
      value: `${weatherData?.uvIndex}, low`,
      icon: faSunPlantWilt,
    },
    {
      name: 'Pressure',
      value: `${weatherData?.pressure} hPa `,
      icon: faGauge,
    },
  ];

  const formattedDate = formatDateString(weatherData?.time, true);
  return (
    <View style={styles.weatherOuter}>
      <ImageBackground
        source={require('./../assets/bcg/bcg.jpg')}
        style={styles.backgroundImage}>
        <View>
          <View style={styles.weatherContainer}>
            <View style={styles.weatherDetails}>
              <Text style={[styles.lastUpdateTime, styles.textColor]}>
                {formattedDate}
              </Text>
              <View style={styles.tempWrapper}>
                <View>
                  <View style={styles.tempInnerWrapper}>
                    <Text style={[styles.temperature, styles.textColor]}>
                      {weatherData?.temperature}
                    </Text>
                    <Text style={[styles.unit, styles.textColor]}>°C</Text>
                  </View>
                  <Text style={[styles.textColor, styles.textWidth]}>
                    Feels like {weatherData?.feelsLikeTemp}°
                  </Text>
                </View>

                <View style={styles.icon}>
                  <Image
                    style={styles.weatherIcon}
                    source={require('./../assets/icons/d320.png')}
                  />
                  <Text>
                    {capitalizeFirstLetter(weatherData?.symbolPhrase)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.weatherDetailCardsWrapper}>
            {weatherDetailCardData.map(item => (
              <WeatherDetailCardMemoized
                key={item.name}
                icon={item.icon}
                name={item.name}
                value={item.value}
              />
            ))}
          </View>
        </View>
        {showHourCard && (
          <>
            <HourlyForecastMemoized />
            <RainChanceMemoized />
            <DayForecastMemoized />
          </>
        )}
      </ImageBackground>
    </View>
  );
}
