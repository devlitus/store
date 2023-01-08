import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5cqa-JkEyItvZT_W6myuf4KB6QZi15zo",
  authDomain: "store-doll.firebaseapp.com",
  projectId: "store-doll",
  storageBucket: "store-doll.appspot.com",
  messagingSenderId: "641882597851",
  appId: "1:641882597851:web:0ead30954f4d72689e9ffe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth }