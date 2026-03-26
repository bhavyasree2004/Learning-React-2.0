// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgm9VL58ilDgywf9ks75WtTZSU9JthEwQ",
  authDomain: "sample-295cb.firebaseapp.com",
  projectId: "sample-295cb",
  storageBucket: "sample-295cb.firebasestorage.app",
  messagingSenderId: "29214472856",
  appId: "1:29214472856:web:d48495e581bd26e8d46eed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);