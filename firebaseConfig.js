import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAFEyNzowbJTpkixmi-59HqGu_HathJOxs",
  authDomain: "docapp-7e827.firebaseapp.com",
  projectId: "docapp-7e827",
  storageBucket: "docapp-7e827.appspot.com",
  messagingSenderId: "33658274923",
  appId: "1:33658274923:web:0ffc6784235c670c971d2e",
  measurementId: "G-2EYWQL0EBK",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { fauth, db };
