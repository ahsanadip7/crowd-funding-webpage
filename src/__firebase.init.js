// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_8a4R4JpHDtBXoYUVL3BIUspw9A0pk9g",
  authDomain: "assignment-no-10-17056.firebaseapp.com",
  projectId: "assignment-no-10-17056",
  storageBucket: "assignment-no-10-17056.firebasestorage.app",
  messagingSenderId: "357114104764",
  appId: "1:357114104764:web:233ed229b60f30706879b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);