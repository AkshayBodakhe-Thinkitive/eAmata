import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/ColorConstants';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {ImagePath} from '../../../constants/ImagePaths';
import {FontType} from '../../../constants/FontType';
import CustomText from '../../../components/Text/CustomText';
import TextInput from '../../../components/TextInput/TextInput';
import {AuthNavConstants} from '../../../constants/NavConstants';
import BottomButton from '../components/BottomButton/BottomButton';

const ResetPasswordScreen = ({navigation}: any) => {
  const handleSubmit = () => {
    navigation.navigate(AuthNavConstants.completeprofile);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        <Image source={ImagePath.resetpass} style={styles.imageStyle} />
        <Text style={styles.h}>Create a secure password</Text>
        <CustomText
          style={{marginBottom: '10%'}}
          color={Colors.neutral50}
          fontSize={responsiveFontSize(2)}>
          Choose a strong password to protect your account and keep your
          information safe.
        </CustomText>
        <TextInput
          label="Set Password"
          placeholder="Enter Password"
          secureTextEntry
          style={{marginBottom: '6%'}}
        />
        <TextInput
          label="Confirm Password"
          placeholder="Enter Password"
          secureTextEntry
        />
      </View>
      <BottomButton title="Set Password & Login" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  page: {
    flex: 1,
    padding: '4%',
    marginTop: Platform.OS == 'android' ? '8%' : null,
  },
  imageStyle: {
    height: responsiveHeight(30),
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
