import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcQA7sGz7hBua17q4nWIZL4I6B_kMXDTI",
  authDomain: "react-cursos-7cc40.firebaseapp.com",
  projectId: "react-cursos-7cc40",
  storageBucket: "react-cursos-7cc40.appspot.com",
  messagingSenderId: "284212794462",
  appId: "1:284212794462:web:4fb47ccfc8d8de9d93d0cf"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

