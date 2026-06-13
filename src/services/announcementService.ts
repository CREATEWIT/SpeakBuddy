import firestore from '@react-native-firebase/firestore';

export async function getWeeklyTopics() {
  const document = await firestore()
    .collection('announcements')
    .doc('weekly_topics')
    .get();

  return document.data();
}