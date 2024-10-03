import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { FontType } from "../../constants/FontType";
import { Colors } from "../../constants/ColorConstants";

export const DropdownStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 8,
  },
  dropdown: {
    backgroundColor:Colors.white,
    borderWidth : 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    height: responsiveHeight(5.5),
    borderColor: Colors.neutral20,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: responsiveFontSize(1.7),
    fontFamily: FontType.Roboto_Medium,
    color : Colors.neutral40
  },
  selectedTextStyle: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: FontType.Roboto_Regular,
    color : Colors.neutral80
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
  },
  labelStyles: {
    fontFamily: FontType.Roboto_Medium,
    color: Colors.neutral70,
    marginBottom: 4,
    fontSize: responsiveFontSize(1.6),
  },
  itemTextStyle: {
    fontSize: responsiveFontSize(1.5),
    fontFamily: FontType.Roboto_Regular,
  },
  errorText: {
    color: Colors.negative50,
    fontFamily: FontType.Roboto_Regular,
    fontSize: responsiveFontSize(0.8),
    position: 'absolute',
    bottom: -16,
  }
})