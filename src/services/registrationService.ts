import firestore from '@react-native-firebase/firestore';

export async function registerForSession(
  uid: string,
  name: string,
) {
  try {
    await firestore()
      .collection('registrations')
      .add({
        uid,
        name,
        topic: 'Job Interview',
        joinedAt: firestore.FieldValue.serverTimestamp(),
      });

    console.log('Registered Successfully');
  } catch (error) {
    console.log(error);
  }
}