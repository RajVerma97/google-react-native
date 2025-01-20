import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCsP2u-bZ2_nJMMDPCkni7RH2iRcKwsp9U',
  authDomain: 'react-native-60072.firebaseapp.com',
  projectId: 'react-native-60072',
  storageBucket: 'react-native-60072.firebasestorage.app',
  messagingSenderId: '294175185450',
  appId: '1:294175185450:web:b53200eb4bca1dfb668153',
  measurementId: 'G-3V33QCBPRT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getDatabase(app);
const firestore = getFirestore(app);

export { app, auth, storage, db, firestore };
