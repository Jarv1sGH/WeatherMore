import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from '../../Styles/WeatherStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
interface WeatherDetailCardProps {
  icon: IconProp;
  name: string;
  value: string;
}
const WeatherDetailCard: React.FC<WeatherDetailCardProps> = ({
  icon,
  name,
  value,
}) => {
  return (
    <View style={styles.weatherDetailCard}>
      <View style={styles.iconWrapper}>
        <FontAwesomeIcon icon={icon} size={15} />
      </View>
      <View style={styles.weatherDetailCardInner}>
        <Text style={styles.textColor}>{name}</Text>
        <Text style={styles.textColor}>{value}</Text>
      </View>
    </View>
  );
};

export default WeatherDetailCard;
