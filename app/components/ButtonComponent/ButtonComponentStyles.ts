import {StyleSheet} from 'react-native';
import {FontType} from '../../constants/FontType';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Colors } from '../../constants/ColorConstants';

export const ButtonComponentStyles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.primary,
    borderWidth: 1,
    height: responsiveHeight(5),
  },
  btnText: {
    color: Colors.white,
    fontSize: responsiveFontSize(2),
    marginHorizontal: responsiveWidth(2.5),
    fontFamily: FontType.Roboto_Medium,
  },
  outlinedButton: {
    backgroundColor: 'white',
  },
});
