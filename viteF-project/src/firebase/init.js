// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi6P35fJkggU68cn4awPT1YI2_3zwdWzA",
  authDomain: "lusandatsilana-dev-portfolio.firebaseapp.com",
  projectId: "lusandatsilana-dev-portfolio",
  storageBucket: "lusandatsilana-dev-portfolio.appspot.com",
  messagingSenderId: "190917917486",
  appId: "1:190917917486:web:c20713b6502321735498bf",
  measurementId: "G-FKZPCQEN3E"
};

// Initialize Firebase & Google Analytics
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize firestore service
const db = getFirestore();
export default db