// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOYLzLkIN21KKNT1a8MWT1by1VqN_JAgw",
  authDomain: "inventory-management-app-202a1.firebaseapp.com",
  projectId: "inventory-management-app-202a1",
  storageBucket: "inventory-management-app-202a1.appspot.com",
  messagingSenderId: "510833407262",
  appId: "1:510833407262:web:49b051dd2b77226840850f",
  measurementId: "G-7W8W91VZKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);