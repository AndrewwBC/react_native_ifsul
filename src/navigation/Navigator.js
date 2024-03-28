/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Icon, useTheme} from '@rneui/themed';

import Home from '../screens/AuthorizedScreens/Home';
import Preload from '../screens/Preload';
import SignIn from '../screens/ExternalScreens/SignIn';
import SignUp from '../screens/ExternalScreens/SignUp';
import ForgotPassword from '../screens/ExternalScreens/ForgotPassword';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function AppStack() {
  const {theme} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Alunos',
          tabBarIcon: () => (
            <Icon
              type="ionicon"
              name="people"
              color={
                theme.mode === 'light'
                  ? theme.colors.primary
                  : theme.colors.black
              }
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

const Navigator = () => {
  const {theme} = useTheme();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.colors.primaryDark} />
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
