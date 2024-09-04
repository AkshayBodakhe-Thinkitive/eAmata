import {
  ActivityIndicator,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {ButtonComponentStyles as styles} from './ButtonComponentStyles';
import { Colors } from '../../constants/ColorConstants';

const Button = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  disabled,
  outlined,
  loading
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        buttonStyle,
        disabled && {backgroundColor: Colors.neutral10, borderWidth: 0},
        outlined ? styles.outlinedButton : null,
      ]}
      onPress={onPress}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator
          color={outlined ? Colors.primary : Colors.white}></ActivityIndicator>
      ) : (
        <Text
          style={[
            styles.btnText,
            textStyle,
            outlined && {color: Colors.primary},
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

interface Props {
  title: string;
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  outlined?: boolean;
  loading?:boolean
}