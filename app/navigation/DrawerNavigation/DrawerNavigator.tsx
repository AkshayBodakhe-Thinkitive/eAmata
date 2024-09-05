import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {Ionicons} from '../../components/Icons/Ionicons';
import MaterialCommunityIcons from '../../components/Icons/MaterialCommunityIcons';
import {MaterialIcons} from '../../components/Icons/MaterialIcons';
import {AppNavConstants, BottomNavConstants} from '../../constants/NavConstants';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import CustomDrawerItem from './CustomDrawerItem';
import BottomBar from '../BottomNavigation/BottomBar';
import { Colors } from '../../constants/ColorConstants';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navigation = useNavigation<any>()

  const logoutFun = () => {
    // Handle logout functionality
    navigation.navigate('Auth')
    setShowLogoutModal(false);
  };


  const CustomDrawerContent = (props: any) => {
    const drawerItems : any = [
      {
        label: 'Home',
        icon: (
          <MaterialCommunityIcons
            name={'home-outline'}
            size={21}
            color={Colors.primary80}
          />
        ),
        onPress: () => props.navigation.navigate(BottomNavConstants.HOME),
      }
    ];

    return (
      <DrawerContentScrollView {...props} style={{height: 100}}>
         <View>

          <View style={styles.drawerItemContainer} />
        </View>

        {drawerItems.map((item:any, index:any) => (
          <CustomDrawerItem
            key={index}
            label={item.label}
            icon={item.icon}
            onPress={item.onPress}
          />
        ))}
        <View style={styles.drawerItemContainer} />
        <View>
          <CustomDrawerItem
            label="Log Out"
            icon={<MaterialIcons name={'logout'} size={21} color={Colors.negative50} />}
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
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeSc"
        component={BottomBar}
        options={{
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
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
    // backgroundColor: colors.grey66,
  },
  drawerItemWrapper: {
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  drawerItemTextWrapper: {
    paddingLeft: 15,
    fontWeight: 'bold',
    // color: colors.black,
  },
  drawerItemSubText: {
    color: '#0097F0',
    paddingLeft: 15,
    paddingTop: 5,
    fontWeight: 'bold',
  },
});
