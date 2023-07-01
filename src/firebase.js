import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD629ha7uyqpuogGEWrlhTaPmdEl3FFhiM",
  authDomain: "linkedinclone-ecfed.firebaseapp.com",
  projectId: "linkedinclone-ecfed",
  storageBucket: "linkedinclone-ecfed.appspot.com",
  messagingSenderId: "283716729623",
  appId: "1:283716729623:web:3671749848adf564fe1552",
  measurementId: "G-40T0GG9ZSN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };