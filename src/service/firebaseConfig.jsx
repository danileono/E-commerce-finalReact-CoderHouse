// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCmV84EIflEfTDj6GER3RHuTPgaznqzs8",
  authDomain: "react-coderhouse-danileon.firebaseapp.com",
  projectId: "react-coderhouse-danileon",
  storageBucket: "react-coderhouse-danileon.appspot.com",
  messagingSenderId: "638634889279",
  appId: "1:638634889279:web:50d8932349b7005dbb288a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)