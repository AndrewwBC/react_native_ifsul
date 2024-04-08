/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from '@rneui/themed';

import Preload from '../screens/Preload';
import SignIn from '../screens/ExternalScreens/SignIn';
import SignUp from '../screens/ExternalScreens/SignUp';
import ForgotPassword from '../screens/ExternalScreens/ForgotPassword';
import Feed from '../screens/AuthorizedScreens/Feed';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function AppStack() {
  const { theme } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
}

type AuthStackParamList = {
  Preload: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

const MyAuthStack = createNativeStackNavigator<AuthStackParamList>();

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
  return (
    <NavigationContainer>
      <StatusBar />
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
