import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Card from '../../../components/Card/Card';
import Row from '../../../components/Row/Row';
import CustomText from '../../../components/Text/CustomText';
import {FontType} from '../../../constants/FontType';
import {Colors} from '../../../constants/ColorConstants';
import useVitalIcon from './VitalIcons';
import moment from 'moment';

const VitalCard = ({item}: any) => {
  const icon = useVitalIcon(item?.name);

  const formatDate = (dateString: any) => {
    return moment(dateString).format('DD MMM, hh:mm A');
  };

  return (
    <Card style={styles.vitalCard}>
      <Row style={{left:-3}}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <CustomText
          fontFamily={FontType.Roboto_Medium}
          color={Colors.neutral80}
          fontSize={responsiveFontSize(2)}>
          {item?.name}
        </CustomText>
      </Row>
      <Row style={{justifyContent:'space-between'}}>
        <Row>
          <CustomText
            color={Colors.neutral60}
            fontSize={responsiveFontSize(1.6)}
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
  );
};

export default VitalCard;

const styles = StyleSheet.create({
  vitalCard: {
    width: '49%',
    height: null,
    padding: 7,
  },
  iconContainer: {
    marginRight: 5,
  },
});
