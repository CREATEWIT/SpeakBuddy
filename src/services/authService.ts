import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export async function signInWithGoogle() {
  await GoogleSignin.hasPlayServices();

  const response = await GoogleSignin.signIn();

  const idToken = response.data?.idToken;

  if (!idToken) {
    throw new Error('No ID Token found');
  }

  const googleCredential =
    auth.GoogleAuthProvider.credential(idToken);

  return auth().signInWithCredential(googleCredential);
}