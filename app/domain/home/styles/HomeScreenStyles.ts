import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/ColorConstants';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import { FontType } from '../../../constants/FontType';

export const Homescreenstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  pageContainer : {
    borderWidth: 0,
    flex : 1,
    paddingHorizontal:'3%',
    paddingTop:'2%'
  },

  titleTxt : {
    fontFamily : FontType.Roboto_Medium,
    fontSize : responsiveFontSize(1.8),
    marginBottom : responsiveHeight(1.2),
    color : Colors.neutral90
  }
});
