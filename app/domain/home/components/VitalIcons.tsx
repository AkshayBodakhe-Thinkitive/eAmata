import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Colors } from '../../../constants/ColorConstants';
import { ImagePath } from '../../../constants/ImagePaths';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const useVitalIcon = (vitalName: string) => {
  switch (vitalName) {
    case 'Heart Rate':
      return (
        <Image
          source={ImagePath.cardiology}
          style={styles.iconStyles}
          resizeMode="contain"
        />
      ); 
    case 'Weight':
      return (
        <Image
          source={ImagePath.weight}
          style={styles.iconStyles}
          resizeMode="contain"
        />
      ); 
    case 'Blood Pressure':  
      return (
        <Image
          source={ImagePath.water_drop}
          style={styles.iconStyles}
          resizeMode="contain"
        />
      ); 
      case 'Blood Glucose':
      return (
        <Image
          source={ImagePath.glucose}
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
        width: responsiveWidth(7), 
        height: responsiveHeight(4),
        // borderWidth:1
    }
})
