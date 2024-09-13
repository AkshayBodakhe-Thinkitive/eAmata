

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../../../components/Card/Card'
import CustomText from '../../../components/Text/CustomText'
import { FontType } from '../../../constants/FontType'
import { Colors } from '../../../constants/ColorConstants'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

const EventCard = ({item}:any) => {
  return (
    <Card style={styles.eventCard}>
    <CustomText
      fontFamily={FontType.Roboto_Medium}
      color={Colors.primary70}
      fontSize={responsiveFontSize(1.9)}>
      {item?.name}
    </CustomText>
    <CustomText
      color={Colors.neutral50}
      fontSize={responsiveFontSize(1.8)}>
      Dec 30, 2024 05:18 PM
    </CustomText>
  </Card>
  )
}

export default EventCard

const styles = StyleSheet.create({
    eventCard : {
        width:'100%',
        height : null,
        padding : '2%',
        marginBottom : responsiveHeight(1.5)
      },
})