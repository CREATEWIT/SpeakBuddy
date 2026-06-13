import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SessionScreen from '../screens/SessionScreen';
import ConversationScreen from '../screens/ConversationScreen';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
   <NavigationContainer>
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen
      name="Splash"
      component={SplashScreen}
    />

    <Stack.Screen
      name="Login"
      component={LoginScreen}
    />

    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
    />

    <Stack.Screen
      name="Home"
      component={HomeScreen}
    />

    <Stack.Screen
      name="Session"
      component={SessionScreen}
    />

    <Stack.Screen
      name="Conversation"
      component={ConversationScreen}
    />
  </Stack.Navigator>
</NavigationContainer>
  );
}