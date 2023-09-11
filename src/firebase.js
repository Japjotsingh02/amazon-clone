// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA9W3OEaC0DrXvU0TfjDveT_KONNBmpvs",
  authDomain: "clone-70007.firebaseapp.com",
  projectId: "clone-70007",
  storageBucket: "clone-70007.appspot.com",
  messagingSenderId: "552634092667",
  appId: "1:552634092667:web:c0d44853ca423bcb91e6de",
  measurementId: "G-M7BHF96EK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth();

export {db,auth};


