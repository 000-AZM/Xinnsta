import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGN7t5FjDeJ-ewm7S_9z0VJrRSggTaJ2Q",
  authDomain: "coin-base-by-hector.firebaseapp.com",
  databaseURL: "https://coin-base-by-hector-default-rtdb.firebaseio.com",
  projectId: "coin-base-by-hector",
  storageBucket: "coin-base-by-hector.firebasestorage.app",
  messagingSenderId: "398789890422",
  appId: "1:398789890422:web:ed6a928037b24be2e36a57",
  measurementId: "G-SGJJM5K3G9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
