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

const VitalCard = ({item}: any) => {
  return (
    <Card style={styles.vitalCard}>
      <CustomText
        fontFamily={FontType.Roboto_Medium}
        color={Colors.neutral80}
        fontSize={responsiveFontSize(2)}>
        {item?.name}
      </CustomText>
      <View style={{borderWidth: 0.6, borderColor: Colors.neutral5}} />
      <Row>
        <CustomText color={Colors.neutral60} fontSize={responsiveFontSize(1.8)}>
          {item?.vital?.[0]?.label} :
        </CustomText>
        <CustomText color={Colors.neutral80} fontSize={responsiveFontSize(1.8)}>
          {item?.vital?.[0]?.value}
        </CustomText>
      </Row>
      <Row>
        <CustomText color={Colors.neutral60} fontSize={responsiveFontSize(1.8)}>
          {item?.vital?.[1]?.label} :
        </CustomText>
        <CustomText color={Colors.neutral80} fontSize={responsiveFontSize(1.8)}>
          {item?.vital?.[1]?.value}
        </CustomText>
      </Row>
    </Card>
  );
};

export default VitalCard;

const styles = StyleSheet.create({
  vitalCard: {
    width: responsiveWidth(50),
    marginRight: responsiveWidth(3),
    height: null,
    padding: 7,
  },
});
