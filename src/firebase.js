import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB2o-SFyilKPf_IxPQzGmAjwNayqhFT5JE",
  authDomain: "linkedin-clone-8e3c0.firebaseapp.com",
  projectId: "linkedin-clone-8e3c0",
  storageBucket: "linkedin-clone-8e3c0.appspot.com",
  messagingSenderId: "244126688895",
  appId: "1:244126688895:web:a0231548429d07ba2cc14a",
  measurementId: "G-S6CRXLSKZR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };