// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDwHb7eWJm-aULggrGZwjGR4nsCW3EzVtU",
  authDomain: "app-chat-39c8e.firebaseapp.com",
  projectId: "app-chat-39c8e",
  storageBucket: "app-chat-39c8e.appspot.com",
  messagingSenderId: "737287120384",
  appId: "1:737287120384:web:8ea1164e54bcc1a752dae5"
};

// Initialize Firebase
const FirebaseDb = initializeApp(firebaseConfig);

export default FirebaseDb;