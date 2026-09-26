// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR62ZB6L_VPDAsdu14BxuF5Ti3z1uFpaY",
  authDomain: "prepwise-e4ed3.firebaseapp.com",
  projectId: "prepwise-e4ed3",
  storageBucket: "prepwise-e4ed3.firebasestorage.app",
  messagingSenderId: "1019811199764",
  appId: "1:1019811199764:web:232029d45a14c4b8b0e001",
  measurementId: "G-C74X7D2SKK"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);

