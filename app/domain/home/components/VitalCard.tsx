import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Card from '../../../components/Card/Card';
import Row from '../../../components/Row/Row';
import CustomText from '../../../components/Text/CustomText';
import {FontType} from '../../../constants/FontType';
import {Colors} from '../../../constants/ColorConstants';
import useVitalIcon from './VitalIcons';
import moment, { weekdays } from 'moment';
import {useNavigation} from '@react-navigation/native';

const formatDate = (dateString: any) => {
  return moment(dateString).format('DD MMM, hh:mm A');
};


const VitalCard = ({item, selected, onPress}: any) => {
  const icon = useVitalIcon(item?.name, selected); // Pass selected to determine the icon style

  return (
    <TouchableOpacity style={{width: '49%'}} onPress={onPress}>
      <Card
        style={[
          styles.vitalCard,
          selected && {borderColor: Colors.primary}, // Highlight border if selected
        ]}>
        <Row style={{left: -3}}>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          <CustomText
            fontFamily={FontType.Roboto_Medium}
            color={selected ? Colors.primary : Colors.neutral80}
            fontSize={responsiveFontSize(2)}>
            {item?.name}
          </CustomText>
        </Row>
        <Row style={{justifyContent: 'space-between'}}>
          <Row>
            <CustomText
              color={Colors.neutral80}
              fontSize={responsiveFontSize(1.8)}
              fontFamily={FontType.Roboto_Medium}>
              {item?.value}{' '}
            </CustomText>
            <CustomText
              color={Colors.neutral40}
              fontSize={responsiveFontSize(1.3)}>
              {item?.unit}
            </CustomText>
          </Row>
          <Row>
            <CustomText
              color={Colors.neutral50}
              fontSize={responsiveFontSize(1.3)}>
              {formatDate(item?.date)}
            </CustomText>
          </Row>
        </Row>
      </Card>
    </TouchableOpacity>
  );
};


export default VitalCard;

const styles = StyleSheet.create({
  vitalCard: {
    width: '100%',
    height:null,
    paddingHorizontal: responsiveFontSize(0.8),
    borderColor: '#9AA5A8',
    backgroundColor: '#FBFCFD'
  },
  iconContainer: {
    marginRight: 5,
  },
});

