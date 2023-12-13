// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, orderBy } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'CHEIA_TAU_API',
  authDomain: 'DOMENIUL_TAU_AUTH',
  projectId: 'ID_PROIECT_TAU',
  storageBucket: 'BUCKET_TAU_STORAGE',
  messagingSenderId: 'SENDER_ID_TAU',
  appId: 'ID_APP_TAU',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const timestamp = serverTimestamp();

export default app;
