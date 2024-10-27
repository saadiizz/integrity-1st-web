// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2srxOJ1TOttHWi8izyn7zbEo2oAjbOfs",
  authDomain: "integrity-1st-automotive.firebaseapp.com",
  projectId: "integrity-1st-automotive",
  storageBucket: "integrity-1st-automotive.appspot.com",
  messagingSenderId: "179303012352",
  appId: "1:179303012352:web:ea134a7d630218b77020e5",
  measurementId: "G-XT1E9XWZR8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
