// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVQGPdLFDXeMBjTY8KGImS3xQgOsB_MCs",
  authDomain: "sample-blog-application-de10b.firebaseapp.com",
  projectId: "sample-blog-application-de10b",
  storageBucket: "sample-blog-application-de10b.firebasestorage.app",
  messagingSenderId: "434134525990",
  appId: "1:434134525990:web:e273d13491ddbb0d355ee7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
