import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ConsentFormsList } from '../../auth/constants/StringConstants';
import Row from '../../../components/Row/Row';
import { AntIcons } from '../../../components/Icons/AntIcons';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { Colors } from '../../../constants/ColorConstants';
import TextButton from '../../../components/TextButton/TextButton';
import { AuthNavConstants } from '../../../constants/NavConstants';
import { FontType } from '../../../constants/FontType';
import { useNavigation } from '@react-navigation/native';
import CommonHeader from '../../../components/Header/CommonHeader';

const ConsentsScreen = () => {

  const navigation = useNavigation<any>()

  const renderSeparator = () => <View style={styles.separator} />;

  const navigateToConsent = (item: any) => {
    navigation.navigate('viewconsent', {item: item});
  };

  const renderItem = ({item, index}: any) => {
    return (
      <Row style={styles.listContainer}>
        <Row>
          {item.status ? (
            <AntIcons
              name="checkcircle"
              size={responsiveFontSize(3)}
              color={Colors.positive60}
            />
          ) : (
            <View style={styles.indexContainer}>
              <Text style={styles.indexNum}>{index + 1}</Text>
            </View>
          )}
          <Text style={styles.listItem}>{item?.name}</Text>
        </Row>
        <TextButton
          text={item?.status ? 'View Form' : 'Sign Form'}
          textStyle={styles.txtBtn}
          onPress={() => navigateToConsent(item)}
        />
      </Row>
    );
  };


  return (
     <View style={styles.container}>
      <CommonHeader title={'Consents'} hideprofileIcon/>
      <View style={styles.page}>
        <FlatList
          data={ConsentFormsList}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
      </View>
  )
}

export default ConsentsScreen

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor : Colors.white
  },
  page: {
    flex: 1,
    padding: '4%',
  },
  listContainer: {
    marginVertical: responsiveHeight(2.5),
    justifyContent: 'space-between',
  },
  listItem: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: FontType.Roboto_Medium,
    color: Colors.neutral90,
    marginLeft: 10,
  },
  indexContainer: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: Colors.neutral40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indexNum: {
    color: Colors.white,
    fontFamily: FontType.Roboto_Medium,
  },
  txtBtn: {
    fontFamily: FontType.Roboto_Medium,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
    width: '100%',
  },
})