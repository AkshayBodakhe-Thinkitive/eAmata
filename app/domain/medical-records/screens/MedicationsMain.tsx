import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../../constants/ColorConstants';
import {useNavigation} from '@react-navigation/native';
import CurrentMedications from './CurrentMedications';
import Row from '../../../components/Row/Row';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {FontType} from '../../../constants/FontType';

const MedicationsMain = () => {
  const navigation = useNavigation<any>();

  const [selected, setSelected] = useState(0);

  const CurrMedsData = [
    {
      name: 'Aciloc 150',
      dosage: '2 per day',
      dispense: '8 Tablets',
      when: 'Before Meal',
      startDate: '10 Jan 2024',
    },
    {
      name: 'Dolo 650',
      dosage: '2 per day',
      dispense: '8 Tablets',
      when: 'After Meal',
      startDate: '10 Jan 2024',
    },
    {
      name: 'Benadryl Syrup',
      dosage: '3 per day',
      dispense: '5ml',
      when: 'After Meal',
      startDate: '10 Jan 2024',
    },
  ];

  const PastMedsData = [
    {
      name: 'Levofloxacin',
      dosage: '4 per day',
      dispense: '20 Tablets',
      when: 'Before Meal',
      startDate: '10 Jan 2024',
    },
    {
      name: 'Benadryl Syrup',
      dosage: '3 per day',
      dispense: '8 ml',
      when: 'N/A',
      startDate: '10 Jan 2024',
    },
  ];

  const [medsData, setMedsData] = useState(CurrMedsData);

  useEffect(() => {
    if (selected === 0) {
      setMedsData(CurrMedsData);
    } else {
      setMedsData(PastMedsData);
    }
  }, [selected]);

  return (
    <View style={styles.container}>
      <Row style={{padding: '3%'}}>
        <TouchableOpacity
          onPress={() => setSelected(0)}
          style={[
            styles.typeView,
            selected === 0 ? styles.selectedView : null,
          ]}>
          <Text
            style={[
              styles.typeText,
              selected === 0 ? styles.selectedTxt : null,
            ]}>
            Current
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected(1)}
          style={[
            styles.typeView,
            selected === 1 ? styles.selectedView : null,
          ]}>
          <Text
            style={[
              styles.typeText,
              selected === 1 ? styles.selectedTxt : null,
            ]}>
            Past
          </Text>
        </TouchableOpacity>
      </Row>
      <CurrentMedications data={medsData}></CurrentMedications>
    </View>
  );
};

export default MedicationsMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  typeView: {
    borderWidth: 1,
    padding: 3,
    borderRadius: 16,
    width: responsiveWidth(18),
    marginRight: 5,
    alignItems: 'center',
  },
  typeText: {
    fontFamily: FontType.Roboto_Regular,
    fontSize: responsiveFontSize(1.8),
    color : Colors.neutral70
  },
  selectedView: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primary5,
  },
  selectedTxt: {
    color: Colors.primary,
    fontFamily: FontType.Roboto_Medium,
  },
});
