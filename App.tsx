import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigator from './app/navigation/StackNavigation/AppNavigator';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <AppNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
