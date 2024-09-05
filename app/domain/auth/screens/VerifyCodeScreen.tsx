import {Image, Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../constants/ColorConstants';
import {ImagePath} from '../../../constants/ImagePaths';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useRoute} from '@react-navigation/native';
import {FontType} from '../../../constants/FontType';
import CustomText from '../../../components/Text/CustomText';
import CustomOTPInput from '../../../components/OTPInput/CustomOtpInput';
import Button from '../../../components/ButtonComponent/ButtonComponent';
import { AuthNavConstants } from '../../../constants/NavConstants';

const VerifyCodeScreen = ({navigation}:any) => {
  const route = useRoute<any>();

  const {email} = route?.params;

  const [otp, setOtp] = useState<any>();

  const handleSubmit = () => {
    navigation.navigate(AuthNavConstants.resetpass)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        <Image source={ImagePath.rafiki} style={styles.imageStyle} />
        <Text style={styles.h}>Verify Code</Text>
        <CustomText color={Colors.neutral50} fontSize={responsiveFontSize(2)}>
          Check the code in the invitation email sent
        </CustomText>
        <CustomText>{email}</CustomText>
        <CustomOTPInput onChange={otp => setOtp(otp)}></CustomOTPInput>
      </View>
      <View style={styles.btnContainer}>
        <Button title="Submit Code" onPress={handleSubmit}/>
      </View>
    </SafeAreaView>
  );
};

export default VerifyCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop : Platform.OS == 'android' ? '8%' :  null
  },
  page: {
    flex: 1,
    padding: '4%',
  },
  imageStyle: {
    height: responsiveHeight(35),
    width: '85%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  h: {
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(3),
    color: Colors.neutral80,
    marginBottom: 5,
  },
  btnContainer: {
    padding: '2%',
    borderTopWidth: 0.5,
    borderColor: 'lightgrey',
    elevation: 5,
    shadowOffset: {
      height: -5,
      width: 0,
    },
    shadowOpacity: 0.06,
    backgroundColor: Colors.white,
  },
});
