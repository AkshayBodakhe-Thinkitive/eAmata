import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors} from '../../constants/ColorConstants';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {FontType} from '../../constants/FontType';

const Status = ({status}: any) => {
  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case 'ongoing':
        return {backgroundColor: '#EFF8FF', color: Colors.informative60}; 
      case 'upcoming':
        return {backgroundColor: Colors.warning5, color: Colors.warning70}; 
      case 'completed':
        return {backgroundColor: Colors.positive5, color: Colors.positive60}; 
      case 'cancelled':
        return {backgroundColor: Colors.negative1, color: Colors.negative60}; 
        case 'assigned':
          return {backgroundColor: Colors.warning5, color: Colors.warning70}; 
      default:
        return {backgroundColor: '#E0E0E0', color: '#757575'};
    }
  };

  const {backgroundColor, color} = getStatusStyle(status);

  return (
    <View style={[styles.statusContainer, {backgroundColor}]}>
      <Text style={[styles.statusText, {color}]}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: responsiveFontSize(1.6),
    fontFamily: FontType.Roboto_Medium,
  },
});

export default Status;
