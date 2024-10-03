import {Image, Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../constants/ColorConstants';
import {ImagePath} from '../../../constants/ImagePaths';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import TextInput from '../../../components/TextInput/TextInput';
import {FontType} from '../../../constants/FontType';
import MaterialCommunityIcons from '../../../components/Icons/MaterialCommunityIcons';
import { AuthNavConstants } from '../../../constants/NavConstants';
import BottomButton from '../components/BottomButton/BottomButton';

const WelcomeScreen = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [errorText, setErrorText] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setIsValidEmail(true); 
    setErrorText(''); 
  };

  const handleSubmit = () => {
    navigation.navigate(AuthNavConstants.verifycode,{email:email})
    // if (validateEmail(email)) {
    //   // Proceed with the next steps
    //   console.log('Email is valid');
    // } else {
    //   setIsValidEmail(false);
    //   setErrorText('Please enter a valid email address.');
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
          <Image source={ImagePath.eAMataBlueText} style={styles.logoImage} />
        <View>
          <Text style={styles.welCome}>Welcome!</Text>
          <Text style={styles.verify}>
            Verify your email to continue with account creation
          </Text>
        </View>
        <TextInput
          value={email}
          placeholder="Enter Your Email"
          autoCapitalize='none'
          label="Email"
          leftIcon={
            <MaterialCommunityIcons
              name="email-outline"
              color={Colors.neutral60}
              size={responsiveFontSize(3)}
            />
          }
          onChangeText={handleEmailChange}
          isValid={!isValidEmail}
          errorText={errorText}
        />
      </View>
      <BottomButton 
      title="Continue" 
      onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  page: {
    flex: 1,
    padding: '4%',
    marginTop : Platform.OS == 'android' ? '8%' :  null
  },
  logoImage: {
    resizeMode: 'contain',
    height: responsiveHeight(4.8),
    width: responsiveWidth(50),
    marginBottom: responsiveHeight(2.5),
  },
  welCome: {
    fontSize: responsiveFontSize(3.5),
    color: Colors.neutral80,
    marginBottom: 8,
    fontFamily: FontType.Roboto_Medium,
  },
  verify: {
    fontSize: responsiveFontSize(1.9),
    color: Colors.neutral80,
    fontFamily: FontType.Roboto_Regular,
    marginBottom: responsiveHeight(2.5),
  },
});
