import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ImagePath} from '../../../constants/ImagePaths';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Loader from '../../../components/Loader/Loader';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {RootState} from '../../../store/storeConfig';
import {
  AppNavConstants,
  AuthNavConstants,
} from '../../../constants/NavConstants';
import {login, makeOnboard} from '../store/AuthReducer';

const SplashScreen = ({navigation}: any) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn,
  );

  const isOnboarded = useAppSelector(
    (state: RootState) => state.auth.isOnboarded,
  );

  // console.log(isLoggedIn, isOnboarded);

  useEffect(() => {
    dispatch(makeOnboard(false));
    dispatch(login(false));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
      const navigationTimer = setTimeout(() => {
        setLoading(false);

        if (isLoggedIn && isOnboarded) {
          navigation.navigate(AppNavConstants.MAIN);
        } else if (isOnboarded === false) {
          navigation.navigate(AppNavConstants.AUTH, {
            screen: AuthNavConstants.welcome,
          });
        } else if (isLoggedIn === false) {
          navigation.navigate(AppNavConstants.AUTH, {
            screen: AuthNavConstants.login,
          });
        }

        // navigation.navigate(AppNavConstants.MAIN);
      }, 2000);

      return () => clearTimeout(navigationTimer);
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={ImagePath.splashscreen}
      style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.innerContainer}>
        <Image source={ImagePath.splashscreenlogo} style={styles.logoStyles} />
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
