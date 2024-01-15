import {Text, View, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faCog, faSearch} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../Styles/HeaderStyles';

export default function Header() {
  const [selctedForecast, setselctedForecast] = useState('today');
  return (
    <View style={styles.Header}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          <Pressable>
            <FontAwesomeIcon icon={faBars} size={20} />
          </Pressable>
          <TextInput
            style={styles.searchInput}
            placeholder="Type here..."
            //   onChangeText={handleInputChange}
            value={'New delhi'}
          />
          <Pressable>
            <FontAwesomeIcon icon={faSearch} size={20} />
          </Pressable>
        </View>
      </View>
      <View style={styles.forecastButtonsWrapper}>
        <Pressable
          style={[
            styles.forecastButtons,
            selctedForecast === 'today' && styles.selectedOption,
          ]}>
          <Text style={styles.optionText}>Today</Text>
        </Pressable>
        <Pressable
          style={[
            styles.forecastButtons,
            selctedForecast === 'tommorow' && styles.selectedOption,
          ]}>
          <Text style={styles.optionText}>Tommorow</Text>
        </Pressable>
        <Pressable
          style={[
            styles.forecastButtons,
            selctedForecast === 'daily' && styles.selectedOption,
          ]}>
          <Text style={styles.optionText}>10 days</Text>
        </Pressable>
      </View>
    </View>
  );
}
