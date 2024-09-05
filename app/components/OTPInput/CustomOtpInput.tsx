import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Colors } from '../../constants/ColorConstants';

const CustomOTPInput = ({ onChange }: { onChange: (otp: string) => void }) => {
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleChangeText = (text: string, index: number) => {
    if (text.length === 1 && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP);
    onChange(newOTP.join(''));
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((value, index) => {
        return (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={[
              styles.input,
              value !== '' && styles.filledInput,
            ]}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            maxLength={1}
            keyboardType="numeric"
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderColor: '#CCCCCC',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: Colors.white,
    borderWidth: 1,
  },
  filledInput: {
    borderColor: Colors.primary,
  },
});

export default CustomOTPInput;
