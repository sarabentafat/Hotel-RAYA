// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDElNNXVDv-WIYa-VpePkTbQF6eYqHjetA",
  authDomain: "gdscxserius.firebaseapp.com",
  databaseURL:
    "https://gdscxserius-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gdscxserius",
  storageBucket: "gdscxserius.appspot.com",
  messagingSenderId: "142297755435",
  appId: "1:142297755435:web:550d7a71a2b2c50e811f6e",
  measurementId: "G-RBXYTZQKV9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
