import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.api_key,
  authDomain: "responza-light.firebaseapp.com",
  projectId: "responza-light",
  storageBucket: "responza-light.appspot.com",
  messagingSenderId: "321929331635",
  appId: "1:321929331635:web:a4a0dfd11ac91144aec1c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)