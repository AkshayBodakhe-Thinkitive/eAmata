import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../constants/ColorConstants';
import CommonHeader from '../../../components/Header/CommonHeader';
import {staticVitalsData} from '../../home/constants/StringConstants';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import VitalCard from '../../home/components/VitalCard';
import Row from '../../../components/Row/Row';
import DropdownComponent from '../../../components/Dropdown/DropDown';
import DatePickerInput from '../../../components/DatePicker/DatePickerInput';
import MaterialCommunityIcons from '../../../components/Icons/MaterialCommunityIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Ionicons} from '../../../components/Icons/Ionicons';
import {AntIcons} from '../../../components/Icons/AntIcons';
import VitalsChart from '../components/vitalchart/VitalsChart';

const VitalsScreen = () => {
  const pastDropdownData = [{label: 'Past 24 Hour', value: '24hr'}];

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [date, setDate] = useState(new Date());

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleConfirm = (selectedDate: any) => {
    setDate && setDate(selectedDate);
    hideDatePicker();
  };

  const [toggleGraph, setToggleGraph] = useState(0);

  const data = [
    {value: 40, label: '11 AM'},
    {value: 80, label: '1 PM'},
    {value: 50, label: '2 AM'},
    {value: 100, label: '3 AM'},
  ];

  const data2 = [
    {value: 70},
    {value: 70},
    {value: 80},
    {value: 70},
  ];

  return (
    <View style={styles.container}>
      <CommonHeader title={'Vitals'}></CommonHeader>
      <View style={styles.page}>
        <View>
          <FlatList
            data={staticVitalsData}
            numColumns={2}
            scrollEnabled={false}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginBottom: 8,
            }}
            contentContainerStyle={{marginBottom: responsiveHeight(1.2)}}
            renderItem={({item}) => {
              return <VitalCard item={item} />;
            }}
          />
        </View>
        <Row style={styles.row1}>
          <Row style={{width: '80%', borderWidth: 0}}>
            <DropdownComponent
              data={pastDropdownData}
              selectedValue="24hr"
              dropDownStyles={{height: responsiveHeight(4.5)}}
              style={{width: '50%', marginBottom: 0}}
            />
            <TouchableOpacity
              onPress={showDatePicker}
              style={styles.datePickerTouch}>
              <MaterialCommunityIcons
                name={'calendar-month-outline'}
                size={24}
                color={Colors.neutral70}
              />
            </TouchableOpacity>
            <DateTimePickerModal
              date={new Date()}
              isVisible={isDatePickerVisible}
              mode={'date'}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </Row>
          <Row style={styles.graphToggleContainer}>
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: toggleGraph === 0 ? Colors.primary : undefined,
                borderRadius: 8,
              }}
              onPress={() => setToggleGraph(0)}>
              <Ionicons
                name="bar-chart"
                size={responsiveFontSize(2.5)}
                style={{
                  color: toggleGraph === 0 ? Colors.white : Colors.neutral40,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setToggleGraph(1)}
              style={{
                padding: 5,
                backgroundColor: toggleGraph === 1 ? Colors.primary : undefined,
                borderRadius: 8,
              }}>
              <AntIcons
                name="bars"
                size={responsiveFontSize(2.5)}
                style={{
                  color: toggleGraph === 1 ? Colors.white : Colors.neutral40,
                }}
              />
            </TouchableOpacity>
          </Row>
        </Row>

        {toggleGraph === 0 ? (
          <View style={{flex: 1, borderWidth: 0}}>
            <VitalsChart records={data} record2={data2} />
          </View>
        ) : (
          <View style={{flex: 1, borderWidth: 0}}>
             
          </View>
        )}
      </View>
    </View>
  );
};

export default VitalsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  page: {
    flex: 1,
    padding: '3%',
  },
  datePickerTouch: {
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: responsiveFontSize(10),
    padding: 5,
    borderColor: Colors.neutral20,
  },
  row1: {
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  graphToggleContainer: {
    backgroundColor: Colors.neutral1,
    borderWidth: 1,
    width: '20%',
    borderRadius: 8,
    borderColor: Colors.neutral5,
    justifyContent: 'space-between',
    padding: 3,
  },
  selectedToggle: {},
});
