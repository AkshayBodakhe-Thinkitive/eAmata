import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../../constants/ColorConstants';
import Button from '../../../../components/ButtonComponent/ButtonComponent';

const BottomButton = ({title, disabled, onPress}: Props) => {
  return (
    <View style={styles.btnContainer}>
      <Button title={title} onPress={onPress} disabled={disabled} />
    </View>
  );
};

export default BottomButton;

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const styles = StyleSheet.create({
  btnContainer: {
    padding: '2%',
    // borderTopWidth: 0.5,
    // borderColor: 'lightgrey',
    elevation: 5,
    shadowOffset: {
      height: -5,
      width: 0,
    },
    shadowOpacity: 0.06,
    backgroundColor: Colors.white,
    marginBottom: Platform.OS == 'ios' ? '5%' : 0,
  },
});
