import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import {saveProfile} from '../services/profileService';

export default function ProfileScreen({navigation}: any) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [level, setLevel] = useState('');
  const [goal, setGoal] = useState('');

  return (
    <View style={{padding: 20}}>
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter name"
      />

      <Text>Age</Text>
      <TextInput
        value={age}
        onChangeText={setAge}
        placeholder="Enter age"
      />

      <Text>Country</Text>
      <TextInput
        value={country}
        onChangeText={setCountry}
        placeholder="Enter country"
      />

      <Text>English Level</Text>
      <TextInput
        value={level}
        onChangeText={setLevel}
        placeholder="Beginner / Intermediate / Advanced"
      />

      <Text>Goal</Text>
      <TextInput
        value={goal}
        onChangeText={setGoal}
        placeholder="Speaking Confidence"
      />

      <Button
  title="Save Profile"
  onPress={async () => {
    try {
      await saveProfile({
        name,
        age,
        country,
        level,
        goal,
      });

      console.log('Profile Saved');

      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  }}
/>
    </View>
  );
}