import React from 'react';
import {View, Text} from 'react-native';

export default function ConversationScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Interview Session Started</Text>
      <Text>Candidate: You</Text>
      <Text>Interviewer: Rahul</Text>
    </View>
  );
}