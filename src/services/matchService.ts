import firestore from '@react-native-firebase/firestore';

export async function getMatch() {
  try {
    const doc = await firestore()
      .collection('matches')
      .doc('test_match')
      .get();

    return doc.data();
  } catch (error) {
    console.log(error);
    return null;
  }
}