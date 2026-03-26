// create and initialize your own firebase here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVRJY8wwSXy_kVr_rUACqwjMlqATp5T04",
  authDomain: "photofolio-fbf0a.firebaseapp.com",
  projectId: "photofolio-fbf0a",
  storageBucket: "photofolio-fbf0a.firebasestorage.app",
  messagingSenderId: "722765086281",
  appId: "1:722765086281:web:9c89206ea1948339f8c998",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
