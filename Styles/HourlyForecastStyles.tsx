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
  },
  hourlyTempsWrapper: {
    flexDirection: 'row',
    // borderWidth: 2,
    flex: 2,
    padding: 5,
  },
  hourTempsContainer: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    width: 48,
    // marginTop: 10,
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
});
