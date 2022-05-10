import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCG790c3g0oiNZSTeaovGYcIA1U73FmKsQ",
  authDomain: "responza-light-db.firebaseapp.com",
  projectId: "responza-light-db",
  storageBucket: "responza-light-db.appspot.com",
  messagingSenderId: "800337635014",
  appId: "1:800337635014:web:7c517b368b91ab4b4799c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)