import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/ColorConstants';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {Ionicons} from '../Icons/Ionicons';
import {FontType} from '../../constants/FontType';
import Row from '../Row/Row';

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  leftIcon?: React.ReactNode;
  title?: string;
}

const HeaderBg = ({children, style, leftIcon, title}: Props) => {
  const navigation = useNavigation<any>();

  const navigateBack = () => navigation.goBack();
  return (
    <SafeAreaView style={styles.container}>
      <Row style={[styles.rowStyle, style]}>
        {leftIcon ?? (
          <TouchableOpacity onPress={navigateBack} style={styles.iconContainer}>
            <Ionicons
              name="arrow-back-sharp"
              color={Colors.neutral90}
              size={responsiveFontSize(3)}
            />
          </TouchableOpacity>
        )}
        {title ? <Text style={styles.headerTxt}>{title}</Text> : children}
      </Row>
    </SafeAreaView>
  );
};

export default HeaderBg;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowStyle: {
    flex: 1,
    height: responsiveHeight(6),
  },
  headerTxt: {
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(2.8),
    color: Colors.neutral90,
    flex: 1,
  },
  iconContainer: {
    marginHorizontal: responsiveWidth(2.5)
  },
});
