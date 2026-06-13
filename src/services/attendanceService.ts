import firestore from '@react-native-firebase/firestore';

export async function markUserJoined() {
  try {
    await firestore()
      .collection('matches')
      .doc('test_match')
      .update({
        userJoined: true,
        userOnTime: true,
        joinedAt: firestore.FieldValue.serverTimestamp(),
      });
  } catch (error) {
    console.log(error);
  }
}