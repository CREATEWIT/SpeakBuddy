import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../styles/SessionScreenStyles';
import {getMatch} from '../services/matchService';
import {markUserJoined} from '../services/attendanceService';

export default function SessionScreen({navigation}: any) {
    const sessionData = {
  topic: 'Job Interview',
  role: 'Waiting For Assignment',
  partner: 'Waiting For Match',
  matchTime: '7:00 PM',
  status: 'Matchmaking Starts In 55 Minutes',
};
const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${minutes}:${secs.toString().padStart(2, '0')}`;
};
const [timeLeft, setTimeLeft] = useState(600);
const [status, setStatus] = useState('Waiting For Match');
const [role, setRole] = useState('Waiting');
const [partner, setPartner] = useState('Waiting');
useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(prev => {
      if (prev <= 1) {
        clearInterval(timer);
        return 0;
      }

      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);
const getRoleDescription = () => {
  if (role === 'Candidate') {
    return 'Answer interview questions confidently and professionally.';
  }

  if (role === 'Interviewer') {
    return 'Assess the candidate and ask relevant questions.';
  }

  return 'Waiting for role assignment.';
};

const loadMatch = async () => {
  const match = await getMatch();

  if (match) {
    setStatus(match.status);
    setRole(match.role);
    setPartner(match.partner);
  }
};

useEffect(() => {
  loadMatch();
}, []);
  return (
    <View style={styles.container}>
     <Text style={styles.label}>
  Topic: {sessionData.topic}
</Text>

<Text style={styles.roleTitle}>
  🎭 Your Role
</Text>

<Text style={styles.roleName}>
  {role}
</Text>

<Text style={styles.label}>
  Goal: {getRoleDescription()}
</Text>
<Text style={styles.roleTitle}>
  ⏳ Session Starts In
</Text>

<Text style={styles.roleName}>
  {formatTime(timeLeft)}
</Text>
<Text style={styles.label}>
  Partner: {partner}
</Text>

<Text style={styles.label}>
  Match Time: {sessionData.matchTime}
</Text>
<Text style={styles.label}>
  Status: {status}
</Text>
<Button
  title="Start Session"
  onPress={async () => {
    await markUserJoined();

    navigation.navigate('Conversation');
  }}
/>
    
    </View>
  );
}