import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD02pKtuWtm_PxOM23VZwzM7rjn10aGxlQ",
  authDomain: "image-community-9a5e6.firebaseapp.com",
  databaseURL: "https://image-community-9a5e6-default-rtdb.firebaseio.com",
  projectId: "image-community-9a5e6",
  storageBucket: "image-community-9a5e6.appspot.com",
  messagingSenderId: "399897480513",
  appId: "1:399897480513:web:637a787a0b9ad31b11e5c0",
  measurementId: "G-L7DCQPHEKL",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();

export { auth };
