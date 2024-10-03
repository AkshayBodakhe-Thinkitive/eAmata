import {KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../constants/ColorConstants';
import Header from '../../../components/Header/Header';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {FontType} from '../../../constants/FontType';
import DropdownComponent from '../../../components/Dropdown/DropDown';
import DatePickerInput from '../../../components/DatePicker/DatePickerInput';
import TextInput from '../../../components/TextInput/TextInput';
import BottomButton from '../../auth/components/BottomButton/BottomButton';
import {OctiIcons} from '../../../components/Icons/OctiIcons';
import ProviderSlots from '../components/ProviderSlots';
import HeaderBg from '../../../components/Header/HeaderBg';

const RequestAssistanceScreen = () => {
  const dropDownData = [
    {label: 'Televisit', value: 'Televisit'},
    {label: 'In-person', value: 'In-person'},
  ];

  const providerData = {
    name: 'Annette Black',
    image:
      'https://s3-alpha-sig.figma.com/img/38b2/03a9/a663abb157734996db788d531459633f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o1YROT-UecIH1U86jAUIrv7HxPrlMYReFMglTglrhq5AI3QRrrsXT88YUHx3f~4CTeMV~rGr8u3QfvlHfjj1O0LLm7Juaf2x8tTnTyhEtL1nLpVuEzrFyCOMPQ7cBjOkG~EdiB89-AFTP-5JB3GCVG8aq~c-m8aG4FjM0k~kaXF65WoSRXrdor18BPNk3RcR-WufgNi0QMY3CmFFvnzpb-8wckBH0PWI3xgKEPdnWb4guvKSUoCwFIJQx3w2y5YkptO5coWwmN8G09ra3O4orowvVmc1IBwI4e9XlXKqnF5P-i35Tf021WsgTEl4I1rB02~ui2lSRsM25TPyg8qhxg__',
    slots: {
      morning: ['09:30 AM', '10:00 AM', '11:30 AM'],
      afternoon: ['12:30 PM', '03:00 PM'],
      evening: ['05:30 AM', '06:10 AM', '06:40 AM'],
    },
  };

  const [selectedAppType, setAppType] = useState('Televisit');

  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedSlot, setSelectedSlot] = useState(null);


  return (
    <View style={styles.container}>
      <HeaderBg title="Request Assistance" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null as any}
        style={{flex: 1}}>
      <ScrollView style={styles.page}>
        <Text style={styles.title}>Event Details</Text>
        <DropdownComponent
          data={dropDownData}
          selectedValue={selectedAppType}
          placeholder="Select"
          label="Appointment Type"
          style={{marginBottom: responsiveHeight(2)}}
          onValueChange={(value: any) => setAppType(value)}
        />
        {selectedAppType === 'In-person' && (
          <TextInput
            label="Location"
            placeholder="Add Location"
            leftIcon={
              <OctiIcons
                name="location"
                color={Colors.neutral60}
                size={responsiveFontSize(3)}
              />
            }
          />
        )}
        <DatePickerInput
          label="Date"
          date={selectedDate}
          setDate={(date: any) => setSelectedDate(date)}
          containerStyles={{marginBottom: responsiveHeight(2)}}
        />
        {selectedDate && (
          <ProviderSlots
            providerData={providerData}
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
          />
        )}
        <TextInput label="Reason" placeholder="Enter your reason" />
      </ScrollView>
      </KeyboardAvoidingView>
      <BottomButton title="Save" onPress={() => {}} />
    </View>
  );
};

export default RequestAssistanceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  page: {
    flex: 1,
    padding: '3%',
  },
  title: {
    fontSize: responsiveFontSize(2.3),
    color: Colors.neutral90,
    fontFamily: FontType.Roboto_Medium,
    marginBottom: responsiveHeight(2),
  },
});
