import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCpySJk_Uz4eY303Ozeb--7d7aJyUXHQfI",
    authDomain: "react-app-cursos-aaa84.firebaseapp.com",
    projectId: "react-app-cursos-aaa84",
    storageBucket: "react-app-cursos-aaa84.appspot.com",
    messagingSenderId: "939509284899",
    appId: "1:939509284899:web:093d8eee16f53f3e783196"
  };

initializeApp(firebaseConfig);
const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
}