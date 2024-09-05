// navigation/BottomBar.js
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import CustomIcon from './CustomIcon';
import { Colors } from '../../constants/ColorConstants';


const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};
const EventsScreen = () => {
  return (
    <View>
      <Text>Events Screen</Text>
    </View>
  );
};
const VitalsScreen = () => {
  return (
    <View>
      <Text>Vitals Screen</Text>
    </View>
  );
};
const ChatbotScreen = () => {
  return (
    <View>
      <Text>Chatbot Screen</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const BottomBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Events') {
            iconName = focused ? 'event' : 'event';
          } else if (route.name === 'Vitals') {
            iconName = focused ? 'dashboard' : 'dashboard';
          } else if (route.name === 'Chatbot') {
            iconName = focused ? 'chat' : 'chat';
          }

          return <CustomIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Vitals" component={VitalsScreen} />
      <Tab.Screen name="Chatbot" component={ChatbotScreen} />
    </Tab.Navigator>
  );
};

export default BottomBar;
