import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/ColorConstants';
import Header from '../../../components/Header/Header';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {FontType} from '../../../constants/FontType';
import Row from '../../../components/Row/Row';
import TextButton from '../../../components/TextButton/TextButton';
import {AntIcons} from '../../../components/Icons/AntIcons';
import BottomButton from '../components/BottomButton/BottomButton';
import {AuthNavConstants} from '../../../constants/NavConstants';
import { ConsentFormsList } from '../constants/StringConstants';
import { useAppDispatch } from '../../../store/hooks';
import { makeOnboard } from '../store/AuthReducer';

const ConsentFormsLists = ({navigation}: any) => {

  const dispatch = useAppDispatch()

  const navigateToConsent = (item: any) => {
    navigation.navigate(AuthNavConstants.consentformscreen, {item: item,showBtn:true});
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

  const renderSeparator = () => <View style={styles.separator} />;

  const handleSubmit = async () => {
    await dispatch(makeOnboard(true))
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <Header title="Consent Forms" />
      <View style={styles.page}>
        <FlatList
          data={ConsentFormsList}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
      <BottomButton title="Complete Onboarding" onPress={handleSubmit} />
    </View>
  );
};

export default ConsentFormsLists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  page: {
    flex: 1,
    padding: '4%',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
    width: '100%',
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
});
