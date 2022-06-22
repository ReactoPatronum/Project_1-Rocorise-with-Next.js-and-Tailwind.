// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.BASEFIRE_API,
  authDomain: "duyuru-47867.firebaseapp.com",
  projectId: "duyuru-47867",
  storageBucket: "duyuru-47867.appspot.com",
  messagingSenderId: "250922850284",
  appId: "1:250922850284:web:204b442eeac89f3dd312c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);