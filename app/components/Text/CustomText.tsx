import React, {FC} from 'react';
import {Text as RNText, TextProps, StyleSheet, TextStyle} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {FontType} from '../../constants/FontType';
import { Colors } from '../../constants/ColorConstants';

const CustomText: FC<CustomTextProps> = ({
  fontSize = responsiveFontSize(1.8),
  color = Colors.neutral80,
  fontFamily = FontType.Roboto_Regular,
  style,
  ...rest
}) => {
  const textStyles: TextStyle = StyleSheet.flatten([
    {fontSize, color, fontFamily},
    style,
    {marginVertical:5}
  ]);

  return <RNText {...rest} style={textStyles} />;
};

export default CustomText;

interface CustomTextProps extends TextProps {
  fontSize?: number;
  color?: string;
  fontFamily?: string;
}
