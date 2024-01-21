import {Text, View, TextInput, Pressable, Animated} from 'react-native';
import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../Styles/HeaderStyles';
import {
  setSearchClicked,
  setSelectedForecast,
} from '../ReduxToolkit/Reducers/reducers';
import {useAppSelector, useAppDispatch} from '../ReduxToolkit/hooks';

export default function Header() {
  const dispatch = useAppDispatch();
  const selectedForecast = useAppSelector(
    state => state.setState.selectedForecast,
  );
  const {locationData} = useAppSelector(state => state.locationReducer);
  const handlePress = () => {
    dispatch(setSearchClicked(true));
  };

  return (
    <View style={styles.Header}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          {/* <Pressable>
            <FontAwesomeIcon icon={faBars} size={20} />
          </Pressable> */}
          <Pressable style={styles.searchInput} onPress={handlePress}>
            <TextInput
              placeholder="Search Location here..."
              value={`${locationData.locality} , ${locationData.city}`}
              editable={false}
              style={{color: '#FFFAF0'}}
            />
          </Pressable>
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
