import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAuxw4VeX_u2HawTRWteh6rWYo60aUVn_8",
  authDomain: "student-tools-hub-cc1ce.firebaseapp.com",
  projectId: "student-tools-hub-cc1ce",
  storageBucket: "student-tools-hub-cc1ce.firebasestorage.app",
  messagingSenderId: "655602829335",
  appId: "1:655602829335:web:e1b969225db6b4b2b8f452",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);