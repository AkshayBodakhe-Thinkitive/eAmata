import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import MedicationCard from '../components/MedicationCard';
import { Colors } from '../../../constants/ColorConstants';

const CurrentMedications = ({data}:any) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
