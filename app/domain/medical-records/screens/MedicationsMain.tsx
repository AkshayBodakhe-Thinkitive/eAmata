import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/ColorConstants'
import CommonHeader from '../../../components/Header/CommonHeader'
import CustomTopTab from '../../../navigation/TopTabNavigators/CustomTopTab'
import { useNavigation } from '@react-navigation/native'
import CurrentMedications from './CurrentMedications'

const MedicationsMain = () => {

  const navigation = useNavigation<any>()

  const MedicationsTopTabs = [
    {key: 'first', title: 'Upcoming', component: CurrentMedications},
    {key: 'second', title: 'Past', component: CurrentMedications},
  ];
 
  return (
    <View style={styles.container}>
      <CommonHeader title='Medications' hideprofileIcon/> 
       <CustomTopTab tabs={MedicationsTopTabs}/>
    </View>
  )
}

export default MedicationsMain

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor : Colors.white
  }
})