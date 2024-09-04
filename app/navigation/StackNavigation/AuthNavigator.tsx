import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../../domain/auth/screens/WelcomeScreen';
import { AuthNavConstants } from '../../constants/NavConstants';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name={AuthNavConstants.welcome}
        options={{headerShown: false}}
        component={WelcomeScreen}
      />
      </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})