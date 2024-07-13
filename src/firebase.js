// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASnB9veLAnnxkDoRttIlNPeri5byvEhuY",
  authDomain: "mental-health-5eb68.firebaseapp.com",
  projectId: "mental-health-5eb68",
  storageBucket: "mental-health-5eb68.appspot.com",
  messagingSenderId: "182578819636",
  appId: "1:182578819636:web:691962a04695c1adcf1061",
  measurementId: "G-4KP5Q7LWLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);