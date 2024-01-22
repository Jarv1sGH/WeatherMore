import {View, Text, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../../Styles/HourlyForecastStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarDays} from '@fortawesome/free-regular-svg-icons';
import {LineChart} from 'react-native-chart-kit';
import {useAppSelector} from '../../ReduxToolkit/hooks';
import {dayExtractor} from '../../utils/dateTimeUtils';

const WeekForecast = () => {
  const {dailyWeather} = useAppSelector(state => state.dailyWeather);
  const [dayArr, setDayArr] = useState<Array<string>>([]);
  const [temperatureData, setTemperatureData] = useState<Array<number>>([]);

  useEffect(() => {
    if (dailyWeather.forecast !== undefined) {
      setDayArr(
        dailyWeather.forecast.slice(0, 7).map(item => {
          return dayExtractor(item.date);
        }),
      );
      setTemperatureData(
        dailyWeather.forecast.slice(0, 7).map(item => {
          return item.maxTemp;
        }),
      );
    }
  }, [dailyWeather]);

  const data = {
    labels: [...dayArr],
    datasets: [
      {
        data: temperatureData,
      },
    ],
  };
  const chartConfig = {
    backgroundColor: '#E1D3FA',
    backgroundGradientFromOpacity: 0,
    backgroundGradientFrom: '#E1D3FA',
    backgroundGradientTo: '#E1D3FA',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(128, 0, 128, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    propsForDots: {
      r: '4',
      strokeWidth: '1',
      stroke: '#fff',
    },
    style: {
      borderRadius: 16,
    },
    decimalPlaces: 0,
  };

  return (
    <View style={[styles.hourlyContainer, styles.DayContainer]}>
      <View style={styles.headingContainer}>
        <View style={styles.iconWrapper}>
          <FontAwesomeIcon icon={faCalendarDays} size={16} />
        </View>
        <Text style={styles.headingText}>Week</Text>
      </View>
      <View style={styles.lineChartWrapper}>
        {temperatureData.length > 0 && (
          <LineChart
            data={data}
            withVerticalLines={false}
            width={345}
            height={165}
            yLabelsOffset={10}
            chartConfig={chartConfig}
            bezier
            withDots={true}
            withShadow={true}
            segments={2}
            style={{
              marginVertical: 8,
              borderRadius: 16,
              paddingRight: 30,
              marginLeft: 35,
            }}
          />
        )}
      </View>
    </View>
  );
};

export default WeekForecast;
