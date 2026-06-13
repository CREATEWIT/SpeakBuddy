import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export async function saveProfile(profile: any) {
  const uid = auth().currentUser?.uid;

  if (!uid) {
    throw new Error('User not logged in');
  }

  await firestore()
    .collection('users')
    .doc(uid)
    .set(profile);
}

export async function getProfile() {
  const uid = auth().currentUser?.uid;

  if (!uid) {
    throw new Error('User not logged in');
  }

  const document = await firestore()
    .collection('users')
    .doc(uid)
    .get();

  return document.data();
}