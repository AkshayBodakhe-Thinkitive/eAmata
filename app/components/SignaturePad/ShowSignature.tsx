import {Image, ImageStyle, StyleProp, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ShowSignature = ({src,style}:Props) => {
  return (
    <>
      <Image
        source={{uri: src}}
        style={[styles.imageStyles,style]}
        resizeMode="contain"
      />
    </>
  );
};

export default ShowSignature;

interface Props {
    src : string,
    style?: StyleProp<ImageStyle>
}

const styles = StyleSheet.create({
    imageStyles : {
        height: 120,
        width: 300,
        borderWidth: 1,
        borderColor: '#D2D2D2',
        borderRadius: 8,
        marginBottom: 10,
      }
});
