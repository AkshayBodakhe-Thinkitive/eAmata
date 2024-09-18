import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Row from '../../../components/Row/Row';
import Card from '../../../components/Card/Card';
import {Colors} from '../../../constants/ColorConstants';
import {FontType} from '../../../constants/FontType';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const AllergyCard = ({allergy}: any) => {
  return (
    <Card style={styles.card}>
      <Row style={styles.titleContainer}>
        <Text style={styles.title}>{allergy?.name}</Text>
        <View style={styles.typeView}>
          <Text style={styles.alergyType}>{allergy?.type}</Text>
        </View>
      </Row>
      <Row style={styles.row}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>{allergy?.status}</Text>
      </Row>
      <Row style={styles.row}>
        <Text style={styles.label}>Severity:</Text>
        <Text style={styles.value}>{allergy?.severity}</Text>
      </Row>
      <Row style={styles.row}>
        <Text style={styles.label}>Reactions:</Text>
        <Text style={styles.value}>{allergy?.reactions}</Text>
      </Row>
      <Row style={styles.row}>
        <Text style={styles.label}>Note:</Text>
        <Text style={styles.value}>{allergy?.note}</Text>
      </Row>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    width: '100%',
    height: null,
  },
  row: {
    // borderWidth:1,
    alignItems: 'flex-start',
    paddingVertical: 5,
    flexWrap: 'wrap',
  },
  titleContainer: {
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderColor: Colors.neutral5,
    marginBottom: 5,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: responsiveFontSize(2),
    fontFamily: FontType.Roboto_Medium,
    color: Colors.neutral60,
    marginBottom: 5,
    marginRight: 6,
  },
  label: {
    fontSize: responsiveFontSize(2),
    color: Colors.neutral80,
    fontFamily: FontType.Roboto_Medium,
    marginBottom: 5,
    width: '30%',
  },
  value: {
    fontSize: 16,
    color: Colors.neutral80,
    fontFamily: FontType.Roboto_Regular,
    width: '70%',
  },
  typeView: {borderRadius: 8, backgroundColor: Colors.primary5},
  alergyType: {
    fontFamily: FontType.Roboto_Medium,
    padding: 3,
    color: Colors.primary,
  },
});

export default AllergyCard;
