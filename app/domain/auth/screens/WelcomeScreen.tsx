import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
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
import Button from '../../../components/ButtonComponent/ButtonComponent';

const WelcomeScreen = () => {
  const [email, setEmail] = useState('');

  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email:string) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (value:string) => {
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        <View>
          <Image source={ImagePath.eAMataBlueText} style={styles.logoImage} />
        </View>
        <View>
          <Text style={styles.welCome}>Welcome!</Text>
          <Text style={styles.verify}>
            Verify your email to continue with account creation
          </Text>
        </View>
        <TextInput
          value={email}
          placeholder="Enter Your Email"
          label="Email"
          leftIcon={
            <MaterialCommunityIcons
              name="email-outline"
              color={Colors.neutral60}
              size={responsiveFontSize(3)}
            />
          }
          onChangeText={handleEmailChange}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button 
        title="Verify Code" 
        // disabled={!isValidEmail}
        />
      </View>
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
    fontWeight: '400',
    color: Colors.neutral80,
    fontFamily: FontType.Roboto_Regular,
    marginBottom: responsiveHeight(2.5),
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
