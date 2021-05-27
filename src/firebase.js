import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpk_Dkqf4-WBO6cro_2HP1VoUZbPxD2Jo",
  authDomain: "linked-in-94c97.firebaseapp.com",
  projectId: "linked-in-94c97",
  storageBucket: "linked-in-94c97.appspot.com",
  messagingSenderId: "581050508856",
  appId: "1:581050508856:web:23aeaf8f36281f8a0ae8cd",
  measurementId: "G-Q5F70DXK7N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
