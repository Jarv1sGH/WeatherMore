import { View, Text, Pressable, TextInput, ScrollView } from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import { styles } from '../Styles/SearchStyles';
import {
  faArrowLeft,
  faLocation,
  faLocationArrow,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useAppDispatch, useAppSelector } from '../ReduxToolkit/hooks';
import { setSearchClicked } from '../ReduxToolkit/Reducers/reducers';
import {
  LocationObjType,
  clearSearchData,
  searchLocation,
} from '../ReduxToolkit/Reducers/searchLocationSlice';
import {
  setLocationData,
} from '../ReduxToolkit/Reducers/locationStringSlice';

const Search = () => {
  const inputRef = useRef<TextInput>(null);
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debounceTime, setDebounceTime] = useState<NodeJS.Timeout | null>(null);
  const { locations } = useAppSelector(state => state.searchResults);
  const handleInputChange = (text: string) => {
    setSearchQuery(text);
    if (text === '' || text.length === 1) {
      if (debounceTime) {
        clearTimeout(debounceTime);
      }
      return;
    }

    if (debounceTime) {
      clearTimeout(debounceTime);
    }
    const newDebounceTime = setTimeout(() => {
      dispatch(searchLocation(text));
    }, 500);
    setDebounceTime(newDebounceTime);
  };

  // focuses the search input once the component renders
  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.setNativeProps({ selection: { start: 0, end: -1 } });
  }, []);

  const setSearchLocation = (item: LocationObjType) => {
    dispatch(
      setLocationData({
        city: item.name,
        countryName: item.country,
        id: item.id,
        timezone: item.timezone,
      }),
    );
    dispatch(setSearchClicked(false));
    dispatch(clearSearchData());
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputWrapper}>
        <Pressable
          style={{ justifyContent: 'center' }}
          onPress={() => {
            dispatch(setSearchClicked(false));
            dispatch(clearSearchData());
          }}>
          <FontAwesomeIcon icon={faArrowLeft} size={25} />
        </Pressable>
        <View style={styles.searchInput}>
          <TextInput
            ref={inputRef}
            style={styles.searchTextInput}
            placeholderTextColor={'#262626'}
            placeholder="Search For Places"
            onChangeText={handleInputChange}
            value={searchQuery}
          />
        </View>
      </View>

      <View style={styles.searchResults}>
        {/* // todo for later */}
        {/* <Pressable
          onPress={() => console.log('first')}
          style={[styles.searchResultCard, { width: '100%', marginTop: 5 }]}>
          <FontAwesomeIcon icon={faLocation} size={22} />
          <View style={{ paddingLeft: 10 }}>
            <Text style={[styles.searchResultText, { padding: 0 }]}>
              New Delhi
            </Text>
            <Text style={{ fontSize: 15, color: '#262626' }}> Your location</Text>
          </View>
        </Pressable> */}

        <ScrollView>
          {locations.locations &&
            locations.locations.slice(0, 10).map(item => (
              <Pressable
                key={item.id}
                onPress={() => setSearchLocation(item)}
                style={styles.searchResultCard}>
                <FontAwesomeIcon icon={faLocationArrow} size={22} />
                <Text style={styles.searchResultText}>
                  {item.name}, {item.country}
                </Text>
              </Pressable>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;
