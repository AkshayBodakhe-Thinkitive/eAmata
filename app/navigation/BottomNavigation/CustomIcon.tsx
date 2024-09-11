// components/CustomIcon.js
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {OctiIcons} from '../../components/Icons/OctiIcons';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {Colors} from '../../constants/ColorConstants';
import {FontAwesome} from '../../components/Icons/FontAwesome';
import {MaterialIcons} from '../../components/Icons/MaterialIcons';
import { ImagePath } from '../../constants/ImagePaths';

const CustomIcon = ({name, size, color, focused}: any) => {
  let iconContent;

  switch (name) {
    case 'home':
      iconContent = (
        <View style={focused ? styles.focusedStyles : styles.unFocusedStyles}>
          <OctiIcons name="home" size={responsiveFontSize(3)} style={focused ? styles.focusedIcon : styles.unFocusedIcon}/>
        </View>
      );
      break;
    case 'event':
      iconContent = (
        <View style={focused ? styles.focusedStyles : styles.unFocusedStyles}>
          <Image source={focused ? ImagePath.event_focused : ImagePath.event} style={styles.focusedIconImg}/>
        </View>
      );
      break;
    case 'Plus':
      iconContent = <></>;
      break;
    case 'Vitals':
      iconContent = (
        <View style={focused ? styles.focusedStyles : styles.unFocusedStyles}>
          <Image source={focused ? ImagePath.ecg_heart_focused : ImagePath.ecg_heart} style={styles.focusedIconImg}/>
        </View>
      );
      break;
    case 'Meds':
      iconContent = (
        <View style={focused ? styles.focusedStyles : styles.unFocusedStyles}>
          <MaterialIcons name="vaccines" size={responsiveFontSize(3)} style={focused ? styles.focusedIcon : styles.unFocusedIcon}/>
        </View>
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
  focusedStyles: {
    backgroundColor: Colors.primary5,
    borderRadius: 18,
    paddingVertical: 6,
  },
  unFocusedStyles: {
    paddingVertical: 6,
  },
  focusedIcon : {
    color : Colors.primary,
    paddingHorizontal : 20
  },
  unFocusedIcon : {
    color : Colors.neutral60,
  },
  focusedIconImg : {height:responsiveHeight(3),resizeMode:'contain',width:responsiveWidth(6), paddingHorizontal : responsiveWidth(8)},

});

export default CustomIcon;
