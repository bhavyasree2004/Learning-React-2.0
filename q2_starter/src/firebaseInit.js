// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv2CQS32_QHFwJRVMvbW0Juaa-GyZK_1Y",
  authDomain: "sample-expense-tracker-f95eb.firebaseapp.com",
  projectId: "sample-expense-tracker-f95eb",
  storageBucket: "sample-expense-tracker-f95eb.firebasestorage.app",
  messagingSenderId: "721299791674",
  appId: "1:721299791674:web:40114be83d1de7f62f3a03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);
