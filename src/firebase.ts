// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2Pom3vmpSywd9gKdyXNkLTzQd9iAVN3Q",
  authDomain: "booking-tour-web-auth.firebaseapp.com",
  projectId: "booking-tour-web-auth",
  storageBucket: "booking-tour-web-auth.appspot.com",
  messagingSenderId: "923656759915",
  appId: "1:923656759915:web:bf8507240e6336b58e1f2e",
  measurementId: "G-D72NPF06TX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
