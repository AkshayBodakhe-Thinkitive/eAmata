import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../domain/auth/screens/SplashScreen';
import AuthNavigator from './AuthNavigator';
import { AppNavConstants } from '../../constants/NavConstants';
import BottomBar from '../BottomNavigation/BottomBar';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={AppNavConstants.SPLASHSCREEN}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={AppNavConstants.SPLASHSCREEN} component={SplashScreen} />
        <Stack.Screen name={AppNavConstants.AUTH} component={AuthNavigator} />
        <Stack.Screen name={AppNavConstants.MAIN} component={BottomBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
