import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RangeIndicatorProps } from '../../utils/Types';

const RangeIndicator: React.FC<RangeIndicatorProps> = ({
  minValue,
  maxValue,
  time,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rangerWrapper}>
        <Text style={styles.rangeText}>{time}</Text>
        <View style={styles.rangeBar}>
          <View
            style={[styles.rangeFill, { width: `${maxValue - minValue}%` }]}
          />
        </View>
        <Text style={styles.rangeText}>{maxValue}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  rangerWrapper: {
    alignItems: 'center',
    width: '94%',
    flexDirection: 'row',
  },
  rangeText: {
    fontSize: 14,
    color: '#262626',
    flex: 1,
    paddingRight: 5,
    textAlign: 'center',
  },
  rangeBar: {
    height: 18,
    width: '65%',
    backgroundColor: '#F6EDFF',
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 10,
  },
  rangeFill: {
    height: '100%',
    borderRadius: 50,
    backgroundColor: '#8A20D5',
  },
});

export default RangeIndicator;
