import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Header from './Header';
import Weather from './Weather';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={'#E1D3FA'} barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.mainContainer}>
          <Header />
          <Weather />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#F6EDFF',
  },
});
