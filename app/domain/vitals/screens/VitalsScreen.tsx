import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/ColorConstants';
import CommonHeader from '../../../components/Header/CommonHeader';
import VitalCard from '../components/VitalCard';

const VitalsScreen = () => {
  const renderItem = ({item, index}: any) => {
    return (
      <VitalCard
        title="Blood Pressure"
        date="Dec 30, 2024"
        metrics={['Systolic', 'Diastolic']}
        values={['115 mmHg', '90 mmHg']}
        onViewPress={() => console.log('View pressed')}
      />
    );
  };

  return (
    <View style={styles.container}>
      <CommonHeader title={'Vitals'}></CommonHeader>
      <View style={styles.page}>
        <FlatList data={[1, 2]} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default VitalsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  page: {
    flex : 1,
    padding: '3%',
  },
});
