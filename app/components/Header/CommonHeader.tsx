import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from './Header';
import Row from '../Row/Row';
import {Ionicons} from '../Icons/Ionicons';
import {MaterialIcons} from '../Icons/MaterialIcons';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {ImagePath} from '../../constants/ImagePaths';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Colors} from '../../constants/ColorConstants';
import {FontType} from '../../constants/FontType';

interface Props {
  title?: any;
}

const CommonHeader = ({title}: Props) => {
  const navigation = useNavigation<any>();
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const notificationCount = 3;
  return (
    <Header>
      <Row style={styles.headerRow}>
        <Row>
          <TouchableOpacity onPress={openDrawer}>
            <Ionicons name="reorder-three" style={styles.threebar} />
          </TouchableOpacity>
          {title ? (
            <Text style={styles.titleTxt}>{title}</Text>
          ) : (
            <View>
              <Text style={styles.greetingTxt}>Good Morning!</Text>
              <Text style={styles.nameTxt}>Akshay Bodakhe</Text>
            </View>
          )}
        </Row>
        <Row style={{width: '30%'}}>
          <TouchableOpacity style={styles.bellTouch}>
            <MaterialIcons name="notifications-none" style={styles.bellIcon} />
            {notificationCount > 0 && (
              <View style={styles.notificationBadge}>
                <Text style={styles.notificationText}>{notificationCount}</Text>
              </View>
            )}
          </TouchableOpacity>
          <Image
            source={ImagePath.avatar}
            style={{resizeMode: 'contain', height: responsiveHeight(3.5)}}
          />
        </Row>
      </Row>
    </Header>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  headerRow: {
    borderWidth: 0,
    width: '100%',
    height: responsiveHeight(4.5),
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'android' ? responsiveHeight(3.5) : 0,
  },
  threebar: {
    fontSize: responsiveFontSize(3.5),
    paddingHorizontal: '4%',
    color: Colors.neutral70,
  },
  notificationBadge: {
    position: 'absolute',
    right: 2,
    backgroundColor: Colors.negative60,
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  greetingTxt: {
    color: Colors.neutral60,
    fontFamily: FontType.Roboto_Medium,
    marginBottom: 2,
  },
  titleTxt: {
    color: Colors.neutral90,
    fontFamily: FontType.Roboto_Medium,
    fontSize: responsiveFontSize(2.6),
  },
  nameTxt: {
    color: Colors.neutral90,
    fontFamily: FontType.Roboto_Medium,
  },
  bellTouch: {
    padding: 5,
  },
  bellIcon: {
    fontSize: responsiveFontSize(3.3),
    color: Colors.neutral90,
  },
});
