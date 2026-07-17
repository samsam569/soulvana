import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAFDCerGcHn8YZBun6JNEj6YrlgHZ1g1Uo",
  authDomain: "soulvana-8b8b3.firebaseapp.com",
  projectId: "soulvana-8b8b3",
  storageBucket: "soulvana-8b8b3.firebasestorage.app",
  messagingSenderId: "368751477564",
  appId: "1:368751477564:web:396098248acd21876ed439"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);