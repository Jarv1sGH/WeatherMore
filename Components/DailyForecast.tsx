import {
  Text,
  View,
  Pressable,
  Animated,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { styles } from '../Styles/DailyForecastStyles';
import { useAppSelector } from '../ReduxToolkit/hooks';
import { formatDateString, uvIndexString } from '../utils/dateTimeUtils';
import { IconSelector } from '../utils/iconUtils';
import { DailyObjType } from '../utils/Types';

const DailyForecastCard = ({
  dailyDataObj,
  index,
}: {
  dailyDataObj: DailyObjType;
  index: number;
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [iconSource, setIconSource] = useState<string | null>(null);
  const cardHeight = useRef(new Animated.Value(70)).current;

  const isLastCard = index === 9;

  const handlePress = (): void => {
    setExpanded(!expanded);
    Animated.timing(cardHeight, {
      toValue: expanded ? 70 : 170,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  const formattedDate = formatDateString(dailyDataObj.date);
  const uvIndexStr: string = uvIndexString(dailyDataObj.uvIndex);

  useEffect(() => {
    if (dailyDataObj !== undefined) {
      setIconSource(IconSelector(dailyDataObj.symbol));
    }
  }, [dailyDataObj]);

  return (
    <Pressable
      onPress={() => {
        handlePress();
      }}>
      <Animated.View
        style={[
          styles.dailyCardWrapper,
          isLastCard && { marginBottom: 10 },
          {
            height: cardHeight,
          },
        ]}>
        <View style={styles.dailyCardInner}>
          <View style={{ flexDirection: 'row', height: 65 }}>
            <View style={styles.cardLeft}>
              <Text style={[styles.cardText, { color: '#262626' }]}>
                {formattedDate}
              </Text>
              <Text style={styles.cardText}>{dailyDataObj.symbolPhrase}</Text>
            </View>
            <View style={styles.cardRight}>
              <View style={styles.weatherIconWrapper}>
                {iconSource !== null && (
                  <Image
                    style={styles.weatherIcon}
                    //@ts-ignore
                    source={iconSource}
                  />
                )}
              </View>
              <View style={styles.weatherTemp}>
                <Text style={styles.tempText}>{dailyDataObj.maxTemp}°</Text>
                <Text style={styles.tempText}>{dailyDataObj.minTemp}°</Text>
              </View>
            </View>
          </View>
          <View style={styles.expandedView}>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardText}>Wind</Text>
              <Text style={styles.cardText}>Humidity</Text>
              <Text style={styles.cardText}>UV Index</Text>
              <Text style={styles.cardText}>Sunrise/Sunset</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.cardText, styles.cardTextColor]}>
                {dailyDataObj.maxWindSpeed} Kmph
              </Text>
              <Text style={[styles.cardText, styles.cardTextColor]}>
                {dailyDataObj.maxRelHumidity} %
              </Text>
              <Text style={[styles.cardText, styles.cardTextColor]}>
                {uvIndexStr === ''
                  ? `${dailyDataObj.uvIndex} `
                  : `${uvIndexStr}, ${dailyDataObj.uvIndex}`}
              </Text>
              <Text style={[styles.cardText, styles.cardTextColor]}>
                {dailyDataObj.sunrise.slice(0, -3)},
                {dailyDataObj.sunset.slice(0, -3)}
              </Text>
            </View>
          </View>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default function DailyForecast({
  refreshing,
  onRefresh,
}: {
  refreshing: boolean;
  onRefresh: () => void;
}) {
  const { dailyWeather } = useAppSelector(state => state.dailyWeather);

  return (
    <View style={styles.dailyWeatherContainer}>
      <FlatList
        data={dailyWeather.forecast.slice(0, 10)}
        renderItem={({ item, index }) => (
          <DailyForecastCard
            key={item.date}
            dailyDataObj={item}
            index={index}
          />
        )}
        keyExtractor={item => item.date}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
}
