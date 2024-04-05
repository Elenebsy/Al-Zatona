// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase-firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4y_HcrmvVOMXd7wb_ci56QJCbBha212Y",
  authDomain: "el-zatona-6013a.firebaseapp.com",
  projectId: "el-zatona-6013a",
  storageBucket: "el-zatona-6013a.appspot.com",
  messagingSenderId: "13856631772",
  appId: "1:13856631772:web:8750bab4ccee2704643d19",
  OAuth: "https://el-zatona-6013a.firebaseapp.com/__/auth/handler",
  databaseURL:
    "https://el-zatona-6013a-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(firebaseConfig);
