import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/ColorConstants';
import CommonHeader from '../../../components/Header/CommonHeader';
import CustomTopTab from '../../../navigation/TopTabNavigators/CustomTopTab';
import UpcomingEvents from './UpcomingEvents';

const EventsScreen = () => {
  const EventsTobTabOptions = [
    {key: 'first', title: 'Upcoming', component: UpcomingEvents},
    {key: 'second', title: 'Past', component: UpcomingEvents},
  ];

  return (
    <View style={styles.container}>
      <CommonHeader title={'Events'}></CommonHeader>
      <CustomTopTab tabs={EventsTobTabOptions} />
    </View>
  );
};

export default EventsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
