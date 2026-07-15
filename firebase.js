// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFDCerGcHn8YZBun6JNEj6YrlgHZ1g1Uo",
  authDomain: "soulvana-8b8b3.firebaseapp.com",
  projectId: "soulvana-8b8b3",
  storageBucket: "soulvana-8b8b3.firebasestorage.app",
  messagingSenderId: "368751477564",
  appId: "1:368751477564:web:396098248acd21876ed439",
  measurementId: "G-5LTFJLEGXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);