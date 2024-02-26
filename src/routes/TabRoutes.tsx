import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import CalendarScreen from '../screens/CalendarScreen';
import OptionsScreen from '../screens/OptionsScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const focusedIcons = {
  Main: (props: any) => <FontAwesome name="sticky-note" {...props} />,
  Calendar: (props: any) => <Ionicons name="calendar-sharp" {...props} />,
  Options: (props: any) => <Ionicons name="settings-sharp" {...props} />,
};

const bluredIcons = {
  Main: (props: any) => <FontAwesome5 name="sticky-note" {...props} />,
  Calendar: (props: any) => <Ionicons name="calendar-outline" {...props} />,
  Options: (props: any) => <Ionicons name="settings-outline" {...props} />,
};

const TabRoutes = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={({ route }) => {
        const FocusedIcon =
          focusedIcons[route.name as keyof typeof focusedIcons];
        console.log(route.name);
        const BlurredIcon = bluredIcons[route.name as keyof typeof bluredIcons];
        return {
          tabBarIcon: (props) =>
            props.focused ? (
              <FocusedIcon {...props} />
            ) : (
              <BlurredIcon {...props} />
            ),
        };
      }}
    >
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Options" component={OptionsScreen} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
