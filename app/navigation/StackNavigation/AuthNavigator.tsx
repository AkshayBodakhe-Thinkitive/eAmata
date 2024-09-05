import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../../domain/auth/screens/WelcomeScreen';
import {AuthNavConstants} from '../../constants/NavConstants';
import VerifyCodeScreen from '../../domain/auth/screens/VerifyCodeScreen';
import ResetPasswordScreen from '../../domain/auth/screens/ResetPasswordScreen';
import CompleteProfileScreen from '../../domain/auth/screens/CompleteProfileScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen 
       name={AuthNavConstants.welcome} 
       component={WelcomeScreen} 
      />
      <Stack.Screen
        name={AuthNavConstants.verifycode}
        component={VerifyCodeScreen}
      />
      <Stack.Screen
        name={AuthNavConstants.resetpass}
        component={ResetPasswordScreen}
      />
        <Stack.Screen
        name={AuthNavConstants.completeprofile}
        component={CompleteProfileScreen}
      />
    </Stack.Navigator>
  );
};



export default AuthNavigator;

const styles = StyleSheet.create({});
