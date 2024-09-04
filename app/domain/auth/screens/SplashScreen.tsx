import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ImagePath} from '../../../constants/ImagePaths';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      // navigation.replace('Auth');
      navigation.navigate('Auth');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={ImagePath.splashscreenlogo} style={styles.logoStyles} />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(2, 146, 192, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    height: responsiveHeight(10),
    width: responsiveWidth(50),
  },
  logoStyles: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});
