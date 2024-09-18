import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/ColorConstants';
import CommonHeader from '../../../components/Header/CommonHeader';

const AssignedDevices = () => {
  return (
    <View style={styles.container}>
      <CommonHeader title={'Assigned Devices'} hideprofileIcon></CommonHeader>
    </View>
  );
};

export default AssignedDevices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
