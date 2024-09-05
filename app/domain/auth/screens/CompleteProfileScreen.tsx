import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/ColorConstants';
import {FontType} from '../../../constants/FontType';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import CustomText from '../../../components/Text/CustomText';
import TextInput from '../../../components/TextInput/TextInput';
import DropdownComponent from '../../../components/Dropdown/DropDown';
import DatePickerInput from '../../../components/DatePicker/DatePickerInput';
import Row from '../../../components/Row/Row';
import Header from '../../../components/Header/Header';
import BottomButton from '../components/BottomButton/BottomButton';
import { AuthNavConstants } from '../../../constants/NavConstants';

const CompleteProfileScreen = ({navigation}:any) => {
  const genderData = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'},
  ];

  const stateData = [{label: 'MH', value: 'MH'}];

  const countryData = [{label: 'India', value: 'India'}];

  const handleSubmit = () => {
    navigation.navigate(AuthNavConstants.consentformslist);
  };

  return (
    <View style={styles.container}>
      <Header title='Complete Your Profile' iconVisible={false}/>
      <ScrollView style={styles.page}>
        <CustomText
          fontFamily={FontType.Roboto_Medium}
          fontSize={responsiveFontSize(2)}>
          Basic Details
        </CustomText>
        <TextInput
          label="First Name"
          placeholder="Enter First Name"
          style={styles.textInputStyles}
        />
        <TextInput
          label="Last Name"
          placeholder="Enter Last Name"
          style={styles.textInputStyles}
        />
        <TextInput
          label="Email"
          placeholder="Enter Email"
          style={styles.textInputStyles}
        />
        <TextInput
          label="Phone"
          placeholder="Phone"
          style={styles.textInputStyles}
        />
        <Row
          style={{justifyContent: 'space-between', alignItems: 'flex-start'}}>
          <DatePickerInput
            date={new Date()}
            setDate={(date: any) => {}}
            label="Date of Birth"
            containerStyles={styles.textInputInRow}
          />
          <DropdownComponent
            data={genderData}
            label="Gender"
            placeholder="Select Gender"
            style={styles.textInputInRow}
          />
        </Row>
        <TextInput
          label="Address Line 1"
          placeholder="Address Line 1"
          style={styles.textInputStyles}
        />
        <TextInput
          label="Address Line 2"
          placeholder="Address Line 2"
          style={styles.textInputStyles}
        />
        <TextInput
          label="City"
          placeholder="City"
          style={styles.textInputStyles}
        />
        <DropdownComponent
          data={stateData}
          label="State"
          placeholder="Select State"
        />
        <Row style={{justifyContent: 'space-between'}}>
          <TextInput
            label="Zip Code"
            placeholder="Zip Code"
            style={styles.textInputInRow}
          />
          <DropdownComponent
            data={countryData}
            label="State"
            placeholder="Select State"
            style={styles.textInputInRow}
          />
        </Row>
        <CustomText
          fontFamily={FontType.Roboto_Medium}
          fontSize={responsiveFontSize(2)}>
          Emergency Details
        </CustomText>
        <TextInput
          label="Name"
          placeholder="Enter Name"
          style={styles.textInputStyles}
        />
        <TextInput
          label="Phone"
          placeholder="Enter Phone Number"
          style={styles.textInputStyles}
        />
        <CustomText
          fontFamily={FontType.Roboto_Medium}
          fontSize={responsiveFontSize(2)}>
          Signature
        </CustomText>
        <TextInput
          label="Sign"
          placeholder="Enter Sign"
          style={styles.textInputStyles}
        />

        <View style={{marginBottom: 50}}></View>
      </ScrollView>
       <BottomButton title='Next' onPress={handleSubmit}/>
    </View>
  );
};

export default CompleteProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  topContainer: {
    backgroundColor: Colors.neutral1,
    height: responsiveHeight(1),
    justifyContent: 'center',
    flex: 1,
  },
  page: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: '4%',
  },
  headerTxt: {
    marginTop: StatusBar.currentHeight,
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(2.8),
    marginLeft: '4%',
    color: Colors.neutral90,
    height: responsiveHeight(6),
    top: 8,
  },
  textInputStyles: {
    marginTop: '2%',
  },
  textInputInRow: {
    width: '49%',
  },
});
