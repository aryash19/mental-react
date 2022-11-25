
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDMTns3C1kyoIfMcPKwN_sN9Bew3dzFhYM",
  authDomain: "mental-health-7c346.firebaseapp.com",
  projectId: "mental-health-7c346",
  storageBucket: "mental-health-7c346.appspot.com",
  messagingSenderId: "680613876996",
  appId: "1:680613876996:web:e44ce711620b4404fdac51",
  measurementId: "G-GLB8FJSB7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
