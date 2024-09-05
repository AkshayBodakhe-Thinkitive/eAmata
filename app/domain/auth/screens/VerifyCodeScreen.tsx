import {Image, Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../constants/ColorConstants';
import {ImagePath} from '../../../constants/ImagePaths';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {useRoute} from '@react-navigation/native';
import {FontType} from '../../../constants/FontType';
import CustomText from '../../../components/Text/CustomText';
import CustomOTPInput from '../../../components/OTPInput/CustomOtpInput';
import { AuthNavConstants } from '../../../constants/NavConstants';
import BottomButton from '../components/BottomButton/BottomButton';

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
      <BottomButton title="Submit Code" onPress={handleSubmit} />
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
});
