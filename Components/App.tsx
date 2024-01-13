import {StyleSheet, SafeAreaView, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Header from './Header';
// import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={'#E1D3FA'} barStyle={'dark-content'} />

      <View style={styles.mainContainer}>
        <Header />
        <Text>App</Text>
      </View>
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
