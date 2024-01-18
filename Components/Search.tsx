import {View, Text, Pressable, TextInput, ScrollView} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {styles} from '../Styles/SearchStyles';
import {
  faArrowLeft,
  faLocation,
  faLocationArrow,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useAppDispatch, useAppSelector} from '../ReduxToolkit/hooks';
import {setSearchClicked} from '../ReduxToolkit/Reducers/reducers';

const Search = () => {
  const inputRef = useRef<TextInput>(null);
  const dispatch = useAppDispatch();

  // focuses the search input once the component renders
  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.setNativeProps({selection: {start: 0, end: -1}});
  }, []);

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputWrapper}>
        <Pressable
          style={{justifyContent: 'center'}}
          onPress={() => {
            dispatch(setSearchClicked(false));
          }}>
          <FontAwesomeIcon icon={faArrowLeft} size={25} />
        </Pressable>
        <View style={styles.searchInput}>
          <TextInput
            ref={inputRef}
            style={styles.searchTextInput}
            placeholder="Search locations"
          />
        </View>
      </View>

      <View style={styles.searchResults}>
        <Pressable
          onPress={() => console.log('first')}
          style={[styles.searchResultCard, {width: '100%', marginTop: 5}]}>
          <FontAwesomeIcon icon={faLocation} size={22} />
          <View style={{paddingLeft: 10}}>
            <Text style={[styles.searchResultText, {padding: 0}]}>
              New Delhi
            </Text>
            <Text style={{fontSize: 15}}> Your location</Text>
          </View>
        </Pressable>
        <ScrollView>
          <Pressable
            onPress={() => console.log('first')}
            style={styles.searchResultCard}>
            <FontAwesomeIcon icon={faLocationArrow} size={22} />
            <Text style={styles.searchResultText}>New Delhi, India</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;
