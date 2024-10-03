import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {useRoute} from '@react-navigation/native';
import Card from '../../../components/Card/Card';
import {FontType} from '../../../constants/FontType';
import Status from '../../../components/Status/Status';
import {FontAwesome} from '../../../components/Icons/FontAwesome';
import {FeatherIcon} from '../../../components/Icons/FeatherIcon';

const VitalsScreen = () => {
  const route = useRoute<any>();

  const pastDropdownData = [
    {label: 'Past 24 Hour', value: '24hr'},
    {label: 'Last Week', value: 'last week'},
    {label: 'Last Month', value: 'last month'},
  ];

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

  const {selectedVital} = route?.params ?? {};

  const [focusedVital, setFocusedVital] = useState<any>();

  useEffect(() => {
    selectedVital
      ? setFocusedVital(selectedVital)
      : setFocusedVital(staticVitalsData[0]);
  }, [selectedVital]);

  // console.log("selectedVital ==>",focusedVital)

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
              return (
                <VitalCard
                  item={item}
                  selected={focusedVital?.name === item.name} // Pass whether this card should be focused
                  onPress={() => setFocusedVital(item)} // Update focusedVital state when pressed
                />
              );
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

        {toggleGraph === 0 && focusedVital ? (
          <View style={{flex: 1, borderWidth: 0}}>
            <VitalsChart
              records={focusedVital?.data}
              record2={focusedVital?.data2}
              referenceRange={focusedVital?.referenceRange}
            />
          </View>
        ) : (
          <View style={{flex: 1, borderWidth: 0}}>
            <FlatList
              data={focusedVital?.data}
              renderItem={({item, index}: any) => {
                let up = index % 2 === 0;

                return (
                  <Card style={styles.card}>
                    <Row style={styles.rowHeader}>
                      <Text style={styles.vitalName}>{focusedVital?.name}</Text>
                      <Status status={up ? 'Device' : 'EHR'} />
                    </Row>
                    <Row style={{justifyContent: 'space-between'}}>
                      <Row style={{width: '40%'}}>
                        <Row style={styles.valueContainer}>
                          <Text style={styles.valueText}>{item?.value}</Text>
                          <Ionicons
                            name={up ? 'arrow-up' : 'arrow-down'}
                            size={responsiveFontSize(2.5)}
                            color={up ? Colors.red : Colors.green}
                          />
                        </Row>
                        <Row style={styles.valueContainer}>
                          <Text style={styles.valueText}>
                            {focusedVital?.data2?.[index]?.value}
                          </Text>
                          {focusedVital?.data2?.[index]?.value && (
                            <Ionicons
                              name={up ? 'arrow-up' : 'arrow-down'}
                              size={responsiveFontSize(2.5)}
                              color={up ? Colors.red : Colors.green}
                            />
                          )}
                        </Row>
                      </Row>
                      <Text style={styles.date}>02-04-2022, 12:30 PM</Text>
                    </Row>
                  </Card>
                );
              }}
            />
          </View>
        )}
      {toggleGraph === 0 && <Row
          style={{
            borderWidth: 0,
            justifyContent: 'center',
            marginBottom: '4%',
          }}>
          <Row style={{marginRight: '3%'}}>
            <Text style={styles.unitText}>
              {focusedVital?.unit1 ? focusedVital?.unit1 : focusedVital?.unit}
            </Text>
          </Row>
          <Row>
          <Text style={styles.unitText}>{focusedVital?.unit2}</Text>
          </Row>
        </Row>}
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
  card: {
    padding: responsiveHeight(1),
    width: '100%',
    height: null,
    marginBottom: responsiveHeight(1),
  },
  rowHeader: {
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  vitalName: {
    color: Colors.neutral60,
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(1.8),
  },
  valueContainer: {
    // width: '15%',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  valueText: {
    color: Colors.neutral70,
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(1.8),
  },
  date: {
    color: Colors.neutral60,
    fontFamily: FontType.Roboto_Regular,
    fontSize: responsiveFontSize(1.8),
  },
  unitText: {
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(2),
    color: Colors.neutral80,
  },
});
