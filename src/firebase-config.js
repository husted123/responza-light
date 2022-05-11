import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDmT4xCAKvZVmHuzwVW2W257wdL-SvXZ5M",
  authDomain: "responza-light-v2.firebaseapp.com",
  projectId: "responza-light-v2",
  storageBucket: "responza-light-v2.appspot.com",
  messagingSenderId: "748995649903",
  appId: "1:748995649903:web:49b3f6f5e6fba29211c89a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)