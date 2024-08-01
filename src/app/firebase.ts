import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBCabKduIWIvXM21xDfJ5cdReBxlYZ7AFs",
  authDomain: "inventory-tracker-858d0.firebaseapp.com",
  projectId: "inventory-tracker-858d0",
  storageBucket: "inventory-tracker-858d0.appspot.com",
  messagingSenderId: "678180338983",
  appId: "1:678180338983:web:657dfdc514197e9b65bd02",
  measurementId: "G-RWVET6T3P8",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore, analytics };
