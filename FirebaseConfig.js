
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from  "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBsQ1nwHnb7mz75JqAZcvH6CUhigNzooss",
  authDomain: "android-club-project.firebaseapp.com",
  projectId: "android-club-project",
  storageBucket: "android-club-project.appspot.com",
  messagingSenderId: "601056307035",
  appId: "1:601056307035:web:9a2c32e35d88472f739c7e",
  measurementId: "G-8CL74S643J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)