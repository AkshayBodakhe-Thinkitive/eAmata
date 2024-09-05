// components/CustomIcon.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CustomIcon = ({name, size, color}: any) => {
  let iconContent;

  switch (name) {
    case 'home':
      iconContent = (
        <View>
          <Text style={[styles.iconText, {fontSize: size, color}]}>🏠</Text>
        </View>
      ); 
      break;
    case 'event':
      iconContent = (
        <Text style={[styles.iconText, {fontSize: size, color}]}>📅</Text>
      ); // Example icon
      break;
    case 'dashboard':
      iconContent = (
        <Text style={[styles.iconText, {fontSize: size, color}]}>📊</Text>
      ); // Example icon
      break;
    case 'chat':
      iconContent = (
        <Text style={[styles.iconText, {fontSize: size, color}]}>💬</Text>
      ); // Example icon
      break;
    default:
      iconContent = (
        <Text style={[styles.iconText, {fontSize: size, color}]}>❓</Text>
      ); // Default icon
  }

  return <View style={styles.iconContainer}>{iconContent}</View>;
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    textAlign: 'center',
  },
});

export default CustomIcon;
