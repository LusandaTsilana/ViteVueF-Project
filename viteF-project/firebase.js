// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi6P35fJkggU68cn4awPT1YI2_3zwdWzA",
  authDomain: "lusandatsilana-dev-portfolio.firebaseapp.com",
  databaseURL: "https://lusandatsilana-dev-portfolio-default-rtdb.firebaseio.com",
  projectId: "lusandatsilana-dev-portfolio",
  storageBucket: "lusandatsilana-dev-portfolio.appspot.com",
  messagingSenderId: "190917917486",
  appId: "1:190917917486:web:349cd5768a6067a85498bf",
  measurementId: "G-FB6HBHBF0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);