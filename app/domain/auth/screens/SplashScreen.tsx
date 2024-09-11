import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ImagePath} from '../../../constants/ImagePaths';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Loader from '../../../components/Loader/Loader';

const SplashScreen = ({navigation}: any) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Start loading after 1 second
    const timer = setTimeout(() => {
      setLoading(true); // Start showing loader
      const navigationTimer = setTimeout(() => {
        setLoading(false); // Stop loader after 1 second
        navigation.navigate('Auth'); // Navigate to Auth screen
      }, 2000); // Duration for displaying loader

      return () => clearTimeout(navigationTimer); // Cleanup navigation timer on unmount
    }, 1000); // Initial delay before starting loader

    return () => clearTimeout(timer); // Cleanup initial timer on unmount
  }, [navigation]);

  return (
      <ImageBackground source={ImagePath.splashscreen} style={{flex:1,alignItems:'center'}}>
        <View style={styles.innerContainer}>
          <Image
            source={ImagePath.splashscreenlogo}
            style={styles.logoStyles}
          />
          {loading && <Loader />}
        </View>
      </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(2, 146, 192, 1)',
    alignItems: 'center',
  },
  innerContainer: {
    height: responsiveHeight(10),
    width: responsiveWidth(50),
    top: '42%',
  },
  logoStyles: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    marginBottom: '8%',
  },
});
