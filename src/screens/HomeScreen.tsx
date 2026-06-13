
import React, {useEffect, useState} from 'react';
import {getWeeklyTopics} from '../services/announcementService';
import {ScrollView, View, Text} from 'react-native';
import {styles} from '../styles/HomeScreenStyles';
import {Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {registerForSession} from '../services/registrationService';

export default function HomeScreen({navigation}: any) {
  const [topics, setTopics] = useState<any>(null);

useEffect(() => {
  loadTopics();
}, []);


const loadTopics = async () => {
  try {
    const data = await getWeeklyTopics();
    setTopics(data);
  } catch (error) {
    console.log(error);
  }
};
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>SpeakBuddy</Text>

      <View style={styles.card}>
        <Text style={styles.heading}>🏆 Top 3 Today</Text>

        <Text>🥇 Rahul - 98</Text>
        <Text>🥈 Aman - 95</Text>
        <Text>🥉 Priya - 92</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>📊 Your Rank</Text>

        <Text>Rank: #2</Text>
        <Text>Score: 95</Text>
      </View>
     <Button
  title="Join Session"
  onPress={async () => {
    const user = auth().currentUser;

    if (user) {
      await registerForSession(
        user.uid,
        user.displayName || 'Unknown User',
      );

      navigation.navigate('Session');
    }
  }}
/>

      <View style={styles.card}>
        <Text style={styles.heading}>🎯 Today's Session</Text>

        <Text>Topic: Job Interview</Text>
        <Text>Shift: 8 PM</Text>
        <Text>Status: Waiting For Match</Text>
      </View>

      <View style={styles.card}>
  <Text style={styles.heading}>📢 Announcements</Text>

  <Text>Sunday - {topics?.sunday}</Text>
  <Text>Monday - {topics?.monday}</Text>
  <Text>Tuesday - {topics?.tuesday}</Text>
  <Text>Wednesday - {topics?.wednesday}</Text>
  <Text>Thursday - {topics?.thursday}</Text>
  <Text>Friday - {topics?.friday}</Text>
  <Text>Saturday - {topics?.saturday}</Text>
</View>
    </ScrollView>
  );
}