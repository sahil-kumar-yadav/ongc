// database connection
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth,onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyCrNq2aWlYH_QOw_du3F6kINYEByM-OaSg",
  authDomain: "ongcproject-38508.firebaseapp.com",
  projectId: "ongcproject-38508",
  storageBucket: "ongcproject-38508.appspot.com",
  messagingSenderId: "518320774657",
  appId: "1:518320774657:web:f5f0968aa43b13e81cea00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app,getAuth,onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut};

// console.log("Intialize database")
// console.log(app);
