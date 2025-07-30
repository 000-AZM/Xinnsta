import { db } from './firebase-init';
import {
  setDoc,
  doc,
  collection,
  query,
  where,
  onSnapshot
} from 'firebase/firestore';
import { auth } from './firebase-init';

export async function sendFriendRequest(toUid) {
  const from = auth.currentUser.uid;
  await setDoc(doc(db, 'friendships', `${from}_${toUid}`), {
    requester: from,
    requested: toUid,
    status: 'pending'
  });
}

export function listenMyFriends(callback) {
  const uid = auth.currentUser.uid;
  const q = query(collection(db, 'friendships'), where('status', '==', 'accepted'));
  return onSnapshot(q, snap => callback(snap.docs.map(d => d.data())));
}
