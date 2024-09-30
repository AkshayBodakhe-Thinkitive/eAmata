import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import CustomIcon from './CustomIcon';
import {Colors} from '../../constants/ColorConstants';
import {FontType} from '../../constants/FontType';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {OctiIcons} from '../../components/Icons/OctiIcons';
import HomeScreen from '../../domain/home/screen/HomeScreen';
import EventsScreen from '../../domain/events/screens/EventsScreen';
import VitalsScreen from '../../domain/vitals/screens/VitalsScreen';
import DrawerNavigator from '../DrawerNavigation/DrawerNavigator';
import MedsScreen from '../../domain/medical-records/screens/MedsScreen';
import QuickAccessModal from '../QuickAcess/QuickAcessModal';

const PlusButton = ({onPress}: any) => {
  return (
    <TouchableOpacity style={styles.plusButton} onPress={onPress}>
      <View style={styles.plusButtonInner}>
        <OctiIcons name="plus" size={30} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const Tab = createBottomTabNavigator();

const BottomBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Events') {
            iconName = focused ? 'event' : 'event';
          } else if (route.name === 'Plus') {
            iconName = focused ? 'Plus' : 'Plus';
          } else if (route.name === 'Vitals') {
            iconName = focused ? 'Vitals' : 'Vitals';
          } else if (route.name === 'Meds') {
            iconName = focused ? 'Meds' : 'Meds';
          }
          return (
            <CustomIcon
              name={iconName}
              size={size}
              color={color}
              focused={focused}
            />
          );
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontFamily: FontType.Roboto_Medium,
          fontSize: responsiveFontSize(1.5),
        },
        tabBarStyle: {height: responsiveHeight(7)},
        headerShown: false,
      })}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen name="Events" component={EventsScreen} />

      <Tab.Screen
        name="Plus"
        component={HomeScreen}
        options={{
          tabBarButton: props => <PlusButton {...props} />,
        }}
      />

      <Tab.Screen name="Vitals" component={VitalsScreen} />
      <Tab.Screen name="Meds" component={MedsScreen} />
    </Tab.Navigator>
  );
};

const CustomTabBar = (props: any) => {
  const [showQuickAccess, setShowQuickAccess] = React.useState(false);

  const handleQuickAccess = () => setShowQuickAccess(false);

  return (
    <View style={styles.tabBarContainer}>
      <PlusButton
        onPress={() => {
          setShowQuickAccess(true)
          console.log('Plus Button Pressed!');
        }}
      />
      {props.state.routes.map((route: any, index: any) => {
        const isFocused = props.state.index === index;
        return (
          <TouchableOpacity
            key={index}
            onPress={() => props.navigation.navigate(route.name)}
            style={styles.tabButton}>
            {props.descriptors[route.key].options.tabBarIcon({
              focused: isFocused,
              color: isFocused ? Colors.primary : Colors.neutral60,
              size: responsiveFontSize(3),
            })}
            <Text
              style={{
                color: isFocused ? Colors.primary : Colors.neutral60,
                fontFamily: FontType.Roboto_Medium,
                fontSize: responsiveFontSize(1.5),
              }}>
              {route.name !== 'Plus' && route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
      <QuickAccessModal visible={showQuickAccess} onClose={handleQuickAccess} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? responsiveHeight(10) : responsiveHeight(9),
    backgroundColor: 'white',
    paddingHorizontal: 20,
    position: 'relative',
    shadowOpacity: 0.1,
    elevation: 4,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: Platform.OS === 'ios' ? '-2%' : 0,
  },
  plusButton: {
    position: 'absolute',
    bottom: responsiveHeight(3.1),
    left: '55%',
    transform: [{translateX: -responsiveWidth(7.5)}],
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    // borderWidth : 1,
    borderRadius: responsiveFontSize(5),
    padding: 5,
    backgroundColor: Colors.primary5,
  },
  plusButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

export default BottomBar;
