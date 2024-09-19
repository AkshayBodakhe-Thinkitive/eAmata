import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from '../../components/Icons/MaterialCommunityIcons';
import {MaterialIcons} from '../../components/Icons/MaterialIcons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomDrawerItem from './CustomDrawerItem';
import BottomBar from '../BottomNavigation/BottomBar';
import {Colors} from '../../constants/ColorConstants';
import {ImagePath} from '../../constants/ImagePaths';
import Row from '../../components/Row/Row';
import {FeatherIcon} from '../../components/Icons/FeatherIcon';
import {AppNavConstants} from '../../constants/NavConstants';
import CarePlanMain from '../../domain/careplan/screens/CarePlanMain';
import HomeScreen from '../../domain/home/screen/HomeScreen';
import AllergiesScreen from '../../domain/medical-records/screens/AllergiesScreen';
import MedicationsMain from '../../domain/medical-records/screens/MedicationsMain';
import AssignedDevices from '../../domain/medical-records/screens/AssignedDevices';
import ConsentsScreen from '../../domain/medical-records/screens/ConsentsScreen';
import Resources from '../../domain/medical-records/screens/Resources';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/storeConfig';
import ConsentFormScreen from '../../domain/auth/screens/ConsentFormScreen';

const Drawer = createDrawerNavigator();

const ImageIcon = ({imagePath}: any) => {
  return (
    <Image
      source={imagePath}
      style={{
        resizeMode: 'contain',
        height: responsiveFontSize(3),
        width: responsiveWidth(5.5),
      }}
    />
  );
};

const DrawerNavigator = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const openDrawer = useAppSelector((state:RootState)=>state.nav.showDrawer)

  // useEffect(()=>{
  //   if(openDrawer){
  //     navigation.dispatch(DrawerActions.openDrawer());
  //   } else{
  //     navigation.dispatch(DrawerActions.closeDrawer());
  //   }
  // },[openDrawer])

  const drawerItems: any = [
    {
      label: 'Home',
      icon: (
        <MaterialCommunityIcons
          name="home-outline"
          size={21}
          color={Colors.primary80}
        />
      ),
      onPress: () => navigation.navigate('HomeSc'),
    },
    {
      label: 'Care Plan',
      icon: <ImageIcon imagePath={ImagePath.clinical_notes} />,
      onPress: () => navigation.navigate(AppNavConstants.CARE_PLAN),
    },
    {
      label: 'Assigned Devices',
      icon: <ImageIcon imagePath={ImagePath.browse_activity} />,
      onPress: () => navigation.navigate(AppNavConstants.ASSIGNED_DEVICES),
    },
    {
      label: 'Consents',
      icon: <ImageIcon imagePath={ImagePath.handshake} />,
      onPress: () => navigation.navigate(AppNavConstants.CONSENTS),
    },
    {
      label: 'Resources',
      icon: (
        <MaterialCommunityIcons
          name="text-box-outline"
          size={21}
          color={Colors.primary80}
        />
      ),
      onPress: () => navigation.navigate(AppNavConstants.RESOURCES),
    },
  ];

  const navigation = useNavigation<any>();

  const logoutFun = () => {
    navigation.navigate('Auth');
    setShowLogoutModal(false);
  };

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const CustomDrawerContent = (props: any) => {
    return (
      <DrawerContentScrollView {...props} style={{height: 100}}>
        <Row
          style={{
            justifyContent: 'space-between',
            width: '90%',
            marginHorizontal: responsiveWidth(4),
            marginBottom: 15,
          }}>
          <Image
            source={ImagePath.eAMataBlueText}
            style={{
              width: '50%',
              height: responsiveHeight(3.2),
              resizeMode: 'contain',
            }}
          />
          <TouchableOpacity onPress={closeDrawer}>
            <FeatherIcon name="x" size={responsiveFontSize(3.5)} />
          </TouchableOpacity>
        </Row>

        {drawerItems.map((item: any, index: any) => (
          <CustomDrawerItem
            key={index}
            label={item.label}
            icon={item.icon}
            onPress={item.onPress}
            subItems={item.subItems}
          />
        ))}

        <View style={styles.drawerItemContainer} />
        <View style={{borderWidth: 0, marginTop: '110%'}}>
          <CustomDrawerItem
            label="Log Out"
            icon={
              <MaterialIcons
                name={'logout'}
                size={21}
                color={Colors.negative50}
              />
            }
            onPress={() => setShowLogoutModal(!showLogoutModal)}
          />
          {/* <LogoutModal
            show={showLogoutModal}
            setShow={setShowLogoutModal}
            onLogout={logoutFun}
          /> */}
        </View>
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      initialRouteName="HomeSc"
      screenOptions={{
        unmountOnBlur: true,
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="HomeSc" component={HomeScreen} />
      <Drawer.Screen
        name={AppNavConstants.CARE_PLAN}
        component={CarePlanMain}
        options={{
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={AppNavConstants.ASSIGNED_DEVICES}
        component={AssignedDevices}
        options={{
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={AppNavConstants.CONSENTS}
        component={ConsentsScreen}
        options={{
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={AppNavConstants.RESOURCES}
        component={Resources}
        options={{
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={'viewconsent'}
        component={ConsentFormScreen}
        options={{
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  drawerItemContainer: {
    width: '100%',
    height: 0.5,
  },
  drawerItemWrapper: {
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20,
  },
  drawerItemTextWrapper: {
    paddingLeft: 15,
    fontWeight: 'bold',
  },
  subItemContainer: {
    paddingLeft: 35,
  },
});
