import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/ColorConstants'
import CurrentPlan from './CurrentPlan';
import CommonHeader from '../../../components/Header/CommonHeader';
import CustomTopTab from '../../../navigation/TopTabNavigators/CustomTopTab';

const CarePlanMain = () => {
    const EventsTobTabOptions = [
        {key: 'first', title: 'Upcoming', component: CurrentPlan},
        {key: 'second', title: 'Past', component: CurrentPlan},
      ];
  return (
    <View style={styles.container}>
      <CommonHeader title={'Care Plan'}></CommonHeader>
      <CustomTopTab tabs={EventsTobTabOptions} />
    </View>
  )
}

export default CarePlanMain

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.white
    }
})