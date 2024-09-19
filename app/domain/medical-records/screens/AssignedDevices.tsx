import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/ColorConstants';
import CommonHeader from '../../../components/Header/CommonHeader';
import Card from '../../../components/Card/Card';
import Row from '../../../components/Row/Row';
import {ImagePath} from '../../../constants/ImagePaths';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {FontType} from '../../../constants/FontType';

const AssignedDevices = () => {
  const bloodPressureMonitorsData = [
    {
      id: 1,
      type: 'Digital Blood Pressure Monitor',
      deviceId: 'ID-367543',
      description: "A Digital Blood Pressure Monitor is an electronic device that measures blood pressure via an upper arm cuff. It automatically inflates, provides quick readings on a digital screen, and often features memory storage for tracking trends, irregular heartbeat detection, and easy one-button operation.",
      image: 'path/to/digital_blood_pressure_monitor_image.jpg',
    },
    {
      id: 2,
      type: 'Finger Blood Pressure Monitor',
      deviceId: 'ID-367544',
      description:"A Finger Blood Pressure Monitor is a compact device that measures blood pressure by placing a finger in a small cuff. While portable and easy to use, it is less accurate than arm monitors and is typically used for quick, non-clinical checks.",
      image: 'path/to/finger_blood_pressure_monitor_image.jpg',
    },
  ];

  const renderItem = ({item}: any) => {
    return (
      <Card
        style={{marginBottom: 8, width: '100%', height: null, padding: '3%'}}>
        <Row>
          <Image
            source={ImagePath.deviceimage}
            style={{
              resizeMode: 'contain',
              height: responsiveHeight(6),
              width: responsiveWidth(13),
              marginRight: 5,
            }}
          />
          <View>
            <Text
              style={{
                color: Colors.neutral80,
                fontFamily: FontType.Roboto_Medium,
                fontSize: responsiveFontSize(2),
                marginBottom: 8,
              }}>
              {item?.type}
            </Text>
            <Text
              style={{
                color: Colors.neutral60,
                fontFamily: FontType.Roboto_Regular,
                fontSize: responsiveFontSize(1.8),
                marginBottom: 5,
              }}>
              {item?.deviceId}
            </Text>
          </View>
        </Row>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: Colors.neutral5,
            marginVertical: 8,
          }}></View>
        <View>
          <Text
            style={{
              color: Colors.neutral80,
              fontFamily: FontType.Roboto_Regular,
              fontSize: responsiveFontSize(1.8),
              marginBottom: 5,
              lineHeight:23,
            }}>
            {item?.description}
          </Text>
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <CommonHeader title={'Assigned Devices'} hideprofileIcon></CommonHeader>
      <View style={styles.page}>
        <FlatList data={bloodPressureMonitorsData} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default AssignedDevices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  page: {
    flex: 1,
    padding: '3%',
  },
});
