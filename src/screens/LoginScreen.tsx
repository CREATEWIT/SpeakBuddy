import React from 'react';
import {View, Button} from 'react-native';
import {signInWithGoogle} from '../services/authService';

export default function LoginScreen({navigation}: any) {
  return (
    <View>
      
      <Button
        title="Sign In With Google"
        onPress={async () => {
          try {
            const user = await signInWithGoogle();

            console.log(user.user.email);

            navigation.navigate('Profile');
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </View>
  );
}