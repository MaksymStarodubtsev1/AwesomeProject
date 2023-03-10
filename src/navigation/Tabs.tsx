import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainScreen } from "../screens/MainScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import React from "react";

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const tabOptions = {
    tabBarLabelStyle: {
      flex: 1,
      fontSize: 16
    },
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: route.name,
        tabBarIcon: () => null,
      })}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={tabOptions}
      />
      <Tab.Screen
        name="Second"
        component={SettingsScreen}
        options={tabOptions}
      />
    </Tab.Navigator>
  );
}
