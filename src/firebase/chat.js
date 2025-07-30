import { db } from './firebase-init';
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy
} from 'firebase/firestore';
import { auth } from './firebase-init';

export async function sendMessage(chatId, text) {
  await addDoc(collection(db, 'chats', chatId, 'messages'), {
    senderId: auth.currentUser.uid,
    text,
    timestamp: Date.now()
  });
}

export function listenChat(chatId, callback) {
  const q = query(collection(db, 'chats', chatId, 'messages'), orderBy('timestamp'));
  return onSnapshot(q, snapshot =>
    callback(snapshot.docs.map(doc => doc.data()))
  );
}
