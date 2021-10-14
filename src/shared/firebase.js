import firebase from 'firebase/app';

import 'firebase/auth';

import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCSEJWESkttOM5j1znpcPcT92QlzDMfNEo',
  authDomain: 'music-project-1d0d1.firebaseapp.com',
  projectId: 'music-project-1d0d1',
  storageBucket: 'music-project-1d0d1.appspot.com',
  messagingSenderId: '53615380258',
  appId: '1:53615380258:web:0739a8afb8f0ac52da877b',
  measurementId: 'G-XJG4T2ENKJ',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const firestore = firebase.firestore();

export { auth, firestore };
