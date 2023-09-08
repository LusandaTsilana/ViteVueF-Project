// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { onUnmounted } from "vue";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADsbgDKKtfarkFh-0SQgNI4Vqgo5_VfTE",
  authDomain: "lusandat-dev.firebaseapp.com",
  projectId: "lusandat-dev",
  storageBucket: "lusandat-dev.appspot.com",
  messagingSenderId: "707226280705",
  appId: "1:707226280705:web:49026e0b31d458240e3100",
  measurementId: "G-LVD3TQQXYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


