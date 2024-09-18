import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/ColorConstants';
import CommonHeader from '../../../components/Header/CommonHeader';
import AllergyCard from '../components/AllergyCard';

const AllergiesScreen = () => {
  const allergiesData = [
    {
      name: 'Dust Allergy',
      status: 'Active',
      type : 'Environment',
      severity: 'Moderate',
      reactions: 'Sneezing, coughing',
      note: 'Please ensure the patient is in a dust-free environment. Wear mask and take regular steams.',
    },
    {
      name: 'Soy Food',
      status: 'Active',
      type : 'Food',
      severity: 'Sever',
      reactions: 'Itchy skin and gastrointestinal discomfort',
      note: 'Avoid eating soy. If taken mistakenly, contact the doctor.',
    },
  ];

  return (
    <View style={styles.container}>
      <CommonHeader title={'Allergies'} hideprofileIcon></CommonHeader>
      <FlatList
        data={allergiesData}
        style={{
          flex: 1,
        }}
        contentContainerStyle={{marginHorizontal: '2%', marginTop: '3%'}}
        renderItem={({item}) => <AllergyCard allergy={item} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default AllergiesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
