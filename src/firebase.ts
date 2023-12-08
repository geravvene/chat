import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSTJeK3t1K-0EESwTOEc4Y4Y2j2Pdhuz4",
  authDomain: "mychat-e634d.firebaseapp.com",
  projectId: "mychat-e634d",
  storageBucket: "mychat-e634d.appspot.com",
  messagingSenderId: "656412344614",
  appId: "1:656412344614:web:160de281470297f79bc1e7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
