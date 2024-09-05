import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../../domain/auth/screens/WelcomeScreen';
import {AuthNavConstants} from '../../constants/NavConstants';
import VerifyCodeScreen from '../../domain/auth/screens/VerifyCodeScreen';
import ResetPasswordScreen from '../../domain/auth/screens/ResetPasswordScreen';
import CompleteProfileScreen from '../../domain/auth/screens/CompleteProfileScreen';
import ConsentFormsList from '../../domain/auth/screens/ConsentFormsList';
import ConsentFormScreen from '../../domain/auth/screens/ConsentFormScreen';

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
      <Stack.Screen
        name={AuthNavConstants.consentformslist}
        component={ConsentFormsList}
      />
         <Stack.Screen
        name={AuthNavConstants.consentformscreen}
        component={ConsentFormScreen}
      />
    </Stack.Navigator>
  );
};



export default AuthNavigator;

const styles = StyleSheet.create({});
