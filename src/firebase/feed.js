import { db } from './firebase-init';
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy
} from 'firebase/firestore';
import { auth } from './firebase-init';

export async function postFeed(content) {
  await addDoc(collection(db, 'feedPosts'), {
    authorId: auth.currentUser.uid,
    content,
    timestamp: Date.now()
  });
}

export function listenFeed(callback) {
  const q = query(collection(db, 'feedPosts'), orderBy('timestamp', 'desc'));
  return onSnapshot(q, snapshot =>
    callback(snapshot.docs.map(doc => doc.data()))
  );
}
