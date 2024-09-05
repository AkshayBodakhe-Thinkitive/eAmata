import { Image, StyleSheet, View, Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { ImagePath } from '../../constants/ImagePaths';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const Loader = () => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1500, 
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    rotateAnimation.start();

    return () => rotateAnimation.stop(); 
  }, [rotateValue]);

  const rotateInterpolation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={ImagePath.loader}
        style={[styles.image, { transform: [{ rotate: rotateInterpolation }] }]}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
  },
  image: {
    resizeMode: 'contain',
    height: responsiveHeight(4),
  },
});
