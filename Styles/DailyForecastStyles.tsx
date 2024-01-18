import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  dailyCardWrapper: {
    padding: 5,
    marginTop: 10,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#E8DEFF',
  },
  dailyCardInner: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    width: '96%',
  },
  cardLeft: {
    flex: 1,
    justifyContent: 'center',
    height: 60,
  },
  cardRight: {
    marginLeft: 'auto',
    marginRight: 5,
    flexDirection: 'row',
    height: 60,
  },
  weatherIconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  weatherIcon: {
    width: 45,
    height: 45,
  },
  weatherTemp: {
    justifyContent: 'center',
  },
  tempText: {
    textAlign: 'right',
    color: '#262626',
    fontWeight: '500',
  },

  cardText: {
    marginLeft: 3,
    padding: 1,
    fontWeight: '500',
  },
  cardTextColor: {
    color: '#262626',
  },
  expandedView: {
    marginTop: 2,
    width: '100%',
    flexDirection: 'row',
  },
});
