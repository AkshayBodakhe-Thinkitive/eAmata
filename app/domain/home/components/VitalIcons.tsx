import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Colors } from '../../../constants/ColorConstants';
import { ImagePath } from '../../../constants/ImagePaths';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const useVitalIcon = (vitalName: string,isFocused: boolean) => {
  switch (vitalName) {
    case 'Heart Rate':
      return (
        <Image
          source={isFocused ? ImagePath.cardiology_focused : ImagePath.cardiology}
          style={styles.iconStyles}
          resizeMode="contain"
        />
      ); 
    case 'Weight':
      return (
        <Image
          source={isFocused ? ImagePath.weight_focused : ImagePath.weight}
          style={styles.iconStyles}
          resizeMode="contain"
        />
      ); 
    case 'Blood Pressure':  
      return (
        <Image
          source={isFocused ? ImagePath.drop_focused : ImagePath.water_drop}
          style={styles.iconStyles}
          resizeMode="contain"
        />
      ); 
      case 'Blood Glucose':
      return (
        <Image
          source={isFocused ? ImagePath.glucose_focused : ImagePath.glucose}
          style={styles.iconStyles}
          resizeMode="contain"
        />
      ); 
    default:
      return null; 
  }
};

export default useVitalIcon;

const styles = StyleSheet.create({
    iconStyles : {
        width: responsiveWidth(6), 
        height: responsiveHeight(4),
    }
})
