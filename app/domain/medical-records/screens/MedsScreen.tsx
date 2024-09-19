import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/ColorConstants';
import CommonHeader from '../../../components/Header/CommonHeader';
import AllergiesScreen from './AllergiesScreen';
import CustomTopTab from '../../../navigation/TopTabNavigators/CustomTopTab';
import MedicationsMain from './MedicationsMain';

const MedsScreen = () => {

  const MedsTopTabs = [
    {key: 'first', title: 'Medications', component: MedicationsMain},
    {key: 'second', title: 'Allergies', component: AllergiesScreen},
  ];
 
  return (
    <View style={styles.container}>
      <CommonHeader title="Meds" />
      <CustomTopTab tabs={MedsTopTabs}/>
    </View>
  );
};

export default MedsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
