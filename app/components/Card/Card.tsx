import {DimensionValue, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import { Colors } from '../../constants/ColorConstants';

const Card = ({ children, style, height = 120, width = 110, touchable = false }: Props) => {
  if (touchable) {
    return (
      <TouchableOpacity style={[styles.container, { height, width }, style]}>
        {children}
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={[styles.container, { height, width }, style]}>
        {children}
      </View>
    );
  }
};


export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: 120,
    width: 110,
    borderRadius: 8,
    borderWidth :1 ,
    borderColor : Colors.neutral5
  },
});

interface Props {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  height?: DimensionValue | undefined;
  width?: DimensionValue | undefined;
  touchable?: boolean;
}
