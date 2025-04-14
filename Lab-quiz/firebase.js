// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzk2R2u4_kzyafZrgrQLeQam6S8XHgOYI",
  authDomain: "abanoub-test.firebaseapp.com",
  projectId: "abanoub-test",
  storageBucket: "abanoub-test.firebasestorage.app",
  messagingSenderId: "446535475205",
  appId: "1:446535475205:web:0536ae01d92209b5357c6c",
  measurementId: "G-1K0FVFLK3T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
