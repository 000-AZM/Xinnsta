import { auth, db } from './firebase-init';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export async function register(email, password, name) {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, 'users', res.user.uid), {
    uid: res.user.uid,
    email,
    name,
    settings: { theme: 'dark' }
  });
  return res.user;
}

export async function login(email, password) {
  const res = await signInWithEmailAndPassword(auth, email, password);
  const userDoc = await getDoc(doc(db, 'users', res.user.uid));
  return { user: res.user, profile: userDoc.data() };
}
