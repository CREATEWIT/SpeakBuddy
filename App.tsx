import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '610448435027-v1vt5u8pcts2dsaarr5gj9ojnpeorrv9.apps.googleusercontent.com', // Replace with your actual web client ID
});

export default function App() {
  return <AppNavigator />;
}