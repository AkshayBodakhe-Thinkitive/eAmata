import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonHeader from '../../../components/Header/CommonHeader'
import { Colors } from '../../../constants/ColorConstants'

const Resources = () => {
  return (
    <View style={styles.container}>
      <CommonHeader title={'Resources'} hideprofileIcon></CommonHeader>
    </View>
  )
}

export default Resources

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
