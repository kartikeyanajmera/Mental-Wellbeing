// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU9l1kHeq8WKkQjlm2mSdf5nlUkHeUxZE",
  authDomain: "mh-auth-88915.firebaseapp.com",
  projectId: "mh-auth-88915",
  storageBucket: "mh-auth-88915.appspot.com",
  messagingSenderId: "391142429333",
  appId: "1:391142429333:web:a59826d3a3c042d281c19c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app)
export default app;