import {StyleSheet, ViewStyle} from 'react-native';

export const iconWrapper: ViewStyle = {
  height: 24,
  width: 24,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  borderRadius: 50,
};
export const styles = StyleSheet.create({
  hourlyContainer: {
    marginTop: 5,
    borderRadius: 10,
    height: 160,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#E1D3FA',
    opacity: 0.75,
  },
  DayContainer: {
    marginTop: 10,
    height: 240,
    marginBottom: 20,
  },
  RainChanceContainer: {
    marginTop: 10,
    height: 180,
  },
  hourlyTempsWrapper: {
    flexDirection: 'row',
    flex: 2,
    padding: 5,
  },
  hourTempsContainer: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
  },
  hourTempText: {
    fontSize: 14,
    color: '#262626',
    padding: 2,
  },
  weatherIcons: {
    width: 45,
    height: 45,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginTop: 5,
  },
  headingText: {
    padding: 5,
    width: '90%',
    color: '#262626',
    fontSize: 16,
    marginLeft: 'auto',
  },
  iconWrapper: {
    ...iconWrapper,
    marginLeft: 8,
  },
  lineChartWrapper: {
    alignItems: 'center',
    paddingBottom: 5,
    flex: 1,
  },
});
