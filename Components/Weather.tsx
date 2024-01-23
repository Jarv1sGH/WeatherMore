import {Text, View, Image, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import WeekForecast from './Cards/WeekForecast';
import RainChance from './Cards/RainChanceCard';
import {weatherObjType} from '../ReduxToolkit/Reducers/currentWeatherSlice';
import {
  capitalizeFirstLetter,
  timeStringConvertor,
  tomorrowHoursExtractor,
} from '../utils/dateTimeUtils';
import {useAppSelector} from '../ReduxToolkit/hooks';
import {hourType} from '../ReduxToolkit/Reducers/hourlyWeatherSlice';

const WeatherDetailCardMemoized = React.memo(WeatherDetailCard);
const HourlyForecastMemoized = React.memo(HourlyForecast);
const RainChanceMemoized = React.memo(RainChance);
const WeekForecastMemoized = React.memo(WeekForecast);

type weatherDataType = {
  name: string;
  value: string;
  icon: IconProp;
};

export default function Weather({weatherData}: {weatherData: weatherObjType}) {
  const {locationData} = useAppSelector(state => state.locationReducer);
  const {hourWeather} = useAppSelector(state => state.hourWeather);
  const [options, setOptions] = useState<Intl.DateTimeFormatOptions>({});
  const selectedForecast = useAppSelector(
    state => state.setState.selectedForecast,
  );
  const [hourCardData, setHourCardData] = useState<Array<hourType>>([]);
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    if (selectedForecast === 'today') {
      setHourCardData(hourWeather.forecast);
    } else if (selectedForecast === 'tomorrow') {
      if (locationData.timezone !== undefined) {
        setHourCardData(
          tomorrowHoursExtractor(hourWeather.forecast, locationData.timezone),
        );
      }
    }
  }, [hourWeather, locationData]);

  useEffect(() => {
    if (locationData.timezone !== undefined) {
      setOptions({
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: locationData?.timezone,
      });
    }
  }, [locationData]);

  useEffect(() => {
    if (selectedForecast === 'tomorrow') {
      const date = new Date(weatherData?.time);
      setTimeString(
        date.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'short',
          day: 'numeric',
        }),
      );
    } else if (selectedForecast === 'today') {
      setTimeString(timeStringConvertor(weatherData?.time, options));
    }
  }, [weatherData, selectedForecast, timeString]);

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
      value: `${Math.floor(weatherData?.pressure)} mBar `,
      icon: faGauge,
    },
  ];

  return (
    <View style={styles.weatherOuter}>
      <ImageBackground
        source={require('./../assets/bcg/bcg.jpg')}
        style={styles.backgroundImage}>
        <View>
          <View style={styles.weatherContainer}>
            <View style={styles.weatherDetails}>
              <Text style={[styles.lastUpdateTime, styles.textColor]}>
                {timeString}
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

        <HourlyForecastMemoized hourCardData={hourCardData} />
        <RainChanceMemoized hourCardData={hourCardData} />
        <WeekForecastMemoized />
      </ImageBackground>
    </View>
  );
}
