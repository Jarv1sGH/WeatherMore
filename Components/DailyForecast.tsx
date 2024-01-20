import {Text, View, Pressable, Animated, Image} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {styles} from '../Styles/DailyForecastStyles';

const DailyForecastCard = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const cardHeight = useRef(new Animated.Value(70)).current;

  const handlePress = (): void => {
    setExpanded(!expanded);
    Animated.timing(cardHeight, {
      toValue: expanded ? 70 : 170,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Pressable
      onPress={() => {
        handlePress();
      }}>
      <Animated.View
        style={[
          styles.dailyCardWrapper,
          {
            height: cardHeight,
          },
        ]}>
        <View style={styles.dailyCardInner}>
          <View style={{flexDirection: 'row', height: 65}}>
            <View style={styles.cardLeft}>
              <Text style={[styles.cardText, {color: '#262626'}]}>
                Fri , 19 jan
              </Text>
              <Text style={styles.cardText}>Partly Cloudy</Text>
            </View>
            <View style={styles.cardRight}>
              <View style={styles.weatherIconWrapper}>
                <Image
                  style={styles.weatherIcon}
                  source={require('./../assets/icons/d320.png')}
                />
              </View>
              <View style={styles.weatherTemp}>
                <Text style={styles.tempText}>17°</Text>
                <Text style={styles.tempText}>8°</Text>
              </View>
            </View>
          </View>

          <View style={styles.expandedView}>
            <View style={{flex: 1}}>
              <Text style={styles.cardText}>Wind</Text>
              <Text style={styles.cardText}>Humidity</Text>
              <Text style={styles.cardText}>UV Index</Text>
              <Text style={styles.cardText}>Sunrise/Sunset</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={[styles.cardText, styles.cardTextColor]}>
                17 Kmph
              </Text>
              <Text style={[styles.cardText, styles.cardTextColor]}>88%</Text>
              <Text style={[styles.cardText, styles.cardTextColor]}>
                Moderate, 6
              </Text>
              <Text style={[styles.cardText, styles.cardTextColor]}>
                7:00 am, 5:58 pm
              </Text>
            </View>
          </View>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default function DailyForecast() {
  return (
    <View style={styles.dailyWeatherContainer}>
      <DailyForecastCard />
    </View>
  );
}
