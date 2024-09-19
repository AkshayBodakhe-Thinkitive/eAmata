import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Row from '../../../components/Row/Row';
import Card from '../../../components/Card/Card';
import {Colors} from '../../../constants/ColorConstants';
import {FontType} from '../../../constants/FontType';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ImagePath} from '../../../constants/ImagePaths';

const MedicationCard = ({medication}: any) => {
  return (
    <Card style={styles.card}>
      <Row style={styles.titleContainer}>
        <Row>
          <Image source={ImagePath.pill} style={styles.iconStyle} />
          <Text style={styles.title}>{medication?.name}</Text>
        </Row>
        <View style={styles.dosageView}>
          <Text
            style={{
              fontFamily: FontType.Roboto_Medium,
              color: Colors.neutral70,
            }}>
            {medication?.dosage}
          </Text>
        </View>
      </Row>
      <Row style={styles.row}>
        <Text style={styles.label}>Dispense:</Text>
        <Text style={styles.value}>{medication?.dispense}</Text>
      </Row>
      <Row style={styles.row}>
        <Text style={styles.label}>When:</Text>
        <Text style={styles.value}>{medication?.when}</Text>
      </Row>
      <Row style={styles.row}>
        <Text style={styles.label}>Start Date:</Text>
        <Text style={styles.value}>{medication?.startDate}</Text>
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
    paddingTop: 10,
  },
  row: {
    alignItems: 'flex-start',
    paddingVertical: 5,
    flexWrap: 'wrap',
  },
  titleContainer: {
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderColor: Colors.neutral5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: responsiveFontSize(2),
    fontFamily: FontType.Roboto_Medium,
    color: Colors.neutral60,
    marginRight: 6,
  },
  label: {
    fontSize: responsiveFontSize(1.8),
    color: Colors.neutral80,
    fontFamily: FontType.Roboto_Medium,
    width: '30%',
  },
  value: {
    fontSize: responsiveFontSize(1.8),
    color: Colors.neutral80,
    fontFamily: FontType.Roboto_Regular,
    width: '70%',
  },
  iconStyle: {
    height: responsiveHeight(3),
    resizeMode: 'contain',
    borderWidth: 0,
    width: responsiveWidth(5),
    marginRight: 5,
  },
  dosageView: {
    backgroundColor: Colors.neutral5,
    borderRadius: 16,
    width: responsiveWidth(20),
    alignItems: 'center',
    paddingVertical: 3,
  },
});

export default MedicationCard;
