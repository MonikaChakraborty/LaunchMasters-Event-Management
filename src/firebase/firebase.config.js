// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOKxvunbVIV0LR8qADzmqQJhW35xLq5mI",
  authDomain: "corporate-event-742f6.firebaseapp.com",
  projectId: "corporate-event-742f6",
  storageBucket: "corporate-event-742f6.appspot.com",
  messagingSenderId: "425132279102",
  appId: "1:425132279102:web:a7e212c2155c8bd544986f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
