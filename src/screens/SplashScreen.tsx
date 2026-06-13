import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function SplashScreen({navigation}: any) {
  useEffect(() => {
    const user = auth().currentUser;

console.log('Current User:', user?.email);

if (user) {
  console.log('Going to Home');
  navigation.replace('Home');
} else {
  console.log('Going to Login');
  navigation.replace('Login');
}
    const checkUser = async () => {
      const user = auth().currentUser;

      if (user) {
        navigation.replace('Home');
      } else {
        navigation.replace('Login');
      }
    };

    checkUser();
  }, [navigation]);

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}