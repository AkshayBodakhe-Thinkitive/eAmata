import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';
import {Colors} from '../../constants/ColorConstants';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {FontType} from '../../constants/FontType';
import {Ionicons} from '../Icons/Ionicons';
import Row from '../Row/Row';

const Header = ({
  title,
  icon,
  iconVisible = true,
  onIconPress,
  children,
}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      {children ? (
        children
      ) : (
        <Row style={styles.row}>
          {iconVisible && (
            <TouchableOpacity
              onPress={onIconPress}
              style={styles.iconContainer}>
              {icon ? (
                icon
              ) : (
                <Ionicons
                  name="arrow-back-sharp"
                  color={Colors.neutral90}
                  style={styles.icon}
                />
              )}
            </TouchableOpacity>
          )}
          <Text style={styles.headerTxt}>{title}</Text>
        </Row>
      )}
    </SafeAreaView>
  );
};

export default Header;

interface Props {
  title?: string;
  icon?: React.ReactElement;
  iconVisible?: boolean;
  onIconPress?: () => void;
  children?: ReactNode;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral1,
    height: responsiveHeight(8),
    flex: Platform.OS === 'android' ? 0.13 : 0.075,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
  },
  headerTxt: {
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(2.8),
    color: Colors.neutral90,
    flex: 1,
    marginLeft:'3%'
  },
  iconContainer: {
    marginRight: '2%',
  },
  icon: {
    fontSize: responsiveFontSize(3),
    paddingLeft: '2%',
  },
  row: {
    marginTop: StatusBar.currentHeight,
  },
});
