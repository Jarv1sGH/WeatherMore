import {Text, View, TextInput, Pressable, Animated} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../Styles/HeaderStyles';
import {setSelectedForecast} from '../ReduxToolkit/Reducers/reducers';
import {useAppSelector, useAppDispatch} from '../ReduxToolkit/hooks';

export default function Header() {
  const dispatch = useAppDispatch();
  const selectedForecast = useAppSelector(
    state => state.selectedComponentReducer.selectedForecast,
  );
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
          onPress={() => {
            dispatch(setSelectedForecast('today'));
          }}
          style={[
            styles.forecastButtons,
            selectedForecast === 'today' && styles.selectedOption,
          ]}>
          <Text style={styles.optionText}>Today</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            dispatch(setSelectedForecast('tomorrow'));
          }}
          style={[
            styles.forecastButtons,
            selectedForecast === 'tomorrow' && styles.selectedOption,
          ]}>
          <Text style={styles.optionText}>Tommorow</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            dispatch(setSelectedForecast('daily'));
          }}
          style={[
            styles.forecastButtons,
            selectedForecast === 'daily' && styles.selectedOption,
          ]}>
          <Text style={styles.optionText}>10 days</Text>
        </Pressable>
      </View>
    </View>
  );
}
