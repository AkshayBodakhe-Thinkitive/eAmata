import {
  Text,
  TextInput as RnTextInput,
  View,
  ViewStyle,
  TouchableOpacity,
  KeyboardType,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  StyleProp,
} from 'react-native';
import React, {ReactNode, useState, forwardRef} from 'react';
import {TextInputStyles as styles} from './TextInputStyles';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import {Ionicons} from '../Icons/Ionicons';
import { Colors } from '../../constants/ColorConstants';

const TextInput = forwardRef(
  (
    {
      label,
      placeholder,
      onChangeText,
      secureTextEntry,
      rightIcon,
      leftIcon,
      style,
      value,
      editable,
      keyboardType,
      isValid,
      errorText,
      onFocus,
      onBlur,
      autoCapitalize,
      inputBoxStyles,
    }: TextInputProps,
    ref: any,
  ) => {
    const [showPass, setShowPass] = useState(true);

    const [internalValue, setInternalValue] = useState(value || '');


    const onChangeTxt = (val: string) => {
      setInternalValue(val);
      onChangeText && onChangeText(val);

    };

    const displayValue = secureTextEntry && showPass
    ? '*'.repeat(internalValue.length)
    : internalValue;


    return (
      <View style={[styles.container, style]}>
        {label && <Text style={styles.labelStyles}>{label}</Text>}
        <View
          style={[
            styles.inputContainer,
            isValid && {
              borderColor: Colors.negative50,
              borderWidth: 0.5,
              marginBottom: 0,
            },
            inputBoxStyles,
          ]}>
          <RnTextInput
            ref={ref}
            cursorColor={'grey'}
            style={[
              styles.inputBox,
              leftIcon ? {marginLeft: responsiveWidth(8)} : null,
            ]}
            editable={editable}
            // value={showPass && secureTextEntry ? displayValue : internalValue}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={Colors.neutral40}
            onChangeText={onChangeTxt}
            secureTextEntry={secureTextEntry ? showPass : false}
            keyboardType={keyboardType}
            onBlur={onBlur}
            onFocus={onFocus}
            autoCapitalize={autoCapitalize}
          />
          <View style={{position: 'absolute', right: 7}}>
            {rightIcon && rightIcon}
          </View>
          <View style={{position: 'absolute', left: 8}}>
            {leftIcon && leftIcon}
          </View>
        </View>
        {isValid && errorText && (
          <Text style={styles.errorText}>{errorText}</Text>
        )}
        {secureTextEntry === true 
        // && text.length > 0 
        && (
          <TouchableOpacity
            onPress={() => {
              setShowPass(!showPass);
            }}
            style={styles.eye}>
            <Ionicons
              name={showPass ? 'eye-outline' : 'eye-outline'}
              color={Colors.neutral70}
              size={24}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

export default TextInput;

export interface TextInputProps {
  ref?: any;
  label?: string;
  value?: string | any;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  style?: StyleProp<ViewStyle>;
  inputBoxStyles?: StyleProp<ViewStyle>;
  editable?: boolean;
  keyboardType?: KeyboardType;
  isValid?: boolean | any;
  errorText?: string;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
}
