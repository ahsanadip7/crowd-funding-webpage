// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoSnn-7ARTErF1f2zHBeWBH0tBCjp4AOQ",
  authDomain: "assignment-9-61eb1.firebaseapp.com",
  projectId: "assignment-9-61eb1",
  storageBucket: "assignment-9-61eb1.firebasestorage.app",
  messagingSenderId: "123058695884",
  appId: "1:123058695884:web:ef4173c0bc010cb5f6dc69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);