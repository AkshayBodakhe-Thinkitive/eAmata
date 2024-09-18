import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const CustomTopTabNavigator = ({ options, activeTabBackgroundColor, inactiveTabBackgroundColor }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => (
          <View
            style={[
              styles.tabItem,
              { backgroundColor: focused ? activeTabBackgroundColor : inactiveTabBackgroundColor }
            ]}
          >
            <Text style={styles.tabText}>{route.name}</Text>
          </View>
        ),
        tabBarIndicatorStyle: { backgroundColor: 'transparent' }, // To remove default indicator
      })}
    >
      {options.map((option) => (
        <Tab.Screen
          key={option.key}
          name={option.title}
          component={option.component}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  tabText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomTopTabNavigator;
