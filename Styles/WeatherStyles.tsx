import {StyleSheet} from 'react-native';
import {iconWrapper as iconWrapperStyle} from './HourlyForecastStyles';

export const styles = StyleSheet.create({
  textColor: {
    color: '#262626',
  },
  textWidth: {
    fontWeight: '400',
  },
  weatherOuter: {
    height: 900,
  },
  weatherIcon: {
    width: 85,
    height: 85,
  },
  weatherContainer: {
    height: 330,
    // borderWidth: 2,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    // backgroundColor: '#E1D3FA',
  },
  weatherDetails: {
    // borderWidth: 2,
    width: '95%',
    alignSelf: 'center',
    padding: 8,
  },
  lastUpdateTime: {
    // padding: 5,
    // fontWeight: '500',
    marginTop: 8,
  },
  tempWrapper: {
    display: 'flex',
    // borderWidth: 2,
    marginTop: 5,
    // width: 120,
    flexDirection: 'row',
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
    // borderWidth: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginTop: 10,
    justifyContent: 'center',
  },
  weatherDetailCard: {
    // borderWidth: 2,
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
    // borderWidth: 2,
    alignItems: 'center',
    width: '65%',
  },
  iconWrapper: {...iconWrapperStyle},
});
