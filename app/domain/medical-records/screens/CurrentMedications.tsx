import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import MedicationCard from '../components/MedicationCard';
import { Colors } from '../../../constants/ColorConstants';

const CurrentMedications = () => {
  const medicationData = [
    {
      name: 'Aciloc 150',
      dosage: '2 per day',
      dispense: '8 Tablets',
      when: 'Before Meal',
      startDate: '10 Jan 2024',
    },
    {
      name: 'Dolo 650',
      dosage: '2 per day',
      dispense: '8 Tablets',
      when: 'After Meal',
      startDate: '10 Jan 2024',
    },
    {
      name: 'Benadryl Syrup',
      dosage: '3 per day',
      dispense: '5ml',
      when: 'After Meal',
      startDate: '10 Jan 2024',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={medicationData}
        style={{
          flex: 1,
        }}
        contentContainerStyle={{marginHorizontal: '2%', marginTop: '3%'}}
        renderItem={({item}) => <MedicationCard medication={item} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default CurrentMedications;

const styles = StyleSheet.create({
   container :  {flex:1,backgroundColor:Colors.white}
})
