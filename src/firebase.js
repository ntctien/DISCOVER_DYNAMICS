// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_OmnSp6UZTcVDaRahxtjgGxOgx0pvbzE",
  authDomain: "discoverdynamics-nhom6.firebaseapp.com",
  projectId: "discoverdynamics-nhom6",
  storageBucket: "discoverdynamics-nhom6.appspot.com",
  messagingSenderId: "1013725523383",
  appId: "1:1013725523383:web:7d243e7a362b245637cc32",
  measurementId: "G-5CN4GBPVD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);