import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/ColorConstants';
import ProgramCard from '../components/ProgramCard';

const CurrentPlan = () => {
  const programData = [
    {
      id: 1,
      type: 'Blood Pressure Program',
      status: 'Ongoing',
      assignedBy: 'John Doe',
      assignedDate: '2024-09-18T00:00:00Z',
    },
    {
      id: 2,
      type: 'Diabetes Program',
      status: 'Assigned',
      assignedBy: 'John Doe',
      assignedDate: '2024-09-18T00:00:00Z',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={programData}
        renderItem={({item}) => <ProgramCard item={item} />} 
        keyExtractor={(item) => item.id.toString()} 
      />
    </View>
  );
};

export default CurrentPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding:'3%'
  },
});
