// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu_Datl4mamXPpORsCsw1INNlcQUO_GGQ",
  authDomain: "usermanagementsystem-40d05.firebaseapp.com",
  projectId: "usermanagementsystem-40d05",
  storageBucket: "usermanagementsystem-40d05.appspot.com",
  messagingSenderId: "272361030014",
  appId: "1:272361030014:web:7ba048175c7ae7386b332f",
  measurementId: "G-PBBECWSN01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics( app );

export const auth = getAuth( app );