import {StyleSheet} from 'react-native';
import {iconWrapper as iconWrapperStyle} from './HourlyForecastStyles';

export const styles = StyleSheet.create({
  textColor: {
    color: '#262626',
  },
  textWidth: {
    fontWeight: '400',
  },
  weatherOuter: {},
  weatherIcon: {
    width: 75,
    height: 75,
  },
  weatherContainer: {
    height: 400,
    // borderWidth: 1,
  },
  weatherDetails: {
    width: '95%',
    alignSelf: 'center',
    padding: 8,
  },
  lastUpdateTime: {
    marginTop: 8,
  },
  tempWrapper: {
    display: 'flex',
    marginTop: 5,
    flexDirection: 'row',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unit: {
    fontSize: 40,
    marginTop: 10,
  },
  temperature: {
    fontSize: 70,
  },
  tempInnerWrapper: {
    flexDirection: 'row',
  },
  icon: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    padding: 10,
    maxWidth: 160,
  },
  weatherDetailCardsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // borderWidth: 2,
  },
  weatherDetailCard: {
    opacity: 0.75,
    flexDirection: 'row',
    borderRadius: 10,
    width: 150,
    height: 60,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 22,
    marginRight: 22,
    backgroundColor: '#E1D3FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherDetailCardInner: {
    alignItems: 'center',
    width: '65%',
  },
  iconWrapper: {...iconWrapperStyle},
});
