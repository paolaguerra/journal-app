// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7jT3fyoULAwzJbgKE1HvAAj1j-WGrXLM",
  authDomain: "react-cursos-4f187.firebaseapp.com",
  projectId: "react-cursos-4f187",
  storageBucket: "react-cursos-4f187.appspot.com",
  messagingSenderId: "637633343331",
  appId: "1:637633343331:web:d0e6f4114bed88b3ab6d56"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);