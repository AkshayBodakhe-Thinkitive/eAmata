import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { CheckBoxstyles } from './CheckBoxStyles';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { FontAwesome } from '../Icons/FontAwesome';
import { Colors } from '../../constants/ColorConstants';
import MaterialCommunityIcons from '../Icons/MaterialCommunityIcons';


const Checkbox = ({checked, onValueChange }:CheckboxProps) => {
  const [isChecked, setChecked] = useState(checked);

  const handleToggle = () => {
    setChecked(!isChecked);
    onValueChange && onValueChange(!isChecked);
  };

  return (
    <TouchableOpacity onPress={handleToggle}>
      <View style={CheckBoxstyles.checkContainer}>
         <MaterialCommunityIcons
          name={isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'}
          size={responsiveFontSize(2.5)}
          // color={checked ? Colors.primary : Colors.neutral70}
          color={'#023F53'}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;

interface CheckboxProps {
  checked : boolean
  onValueChange?: (checked: boolean) => void;
}
