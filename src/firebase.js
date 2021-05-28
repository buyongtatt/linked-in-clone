import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlRDQl_nfDa4sqpXN7Zk8lh_LAHVEuZsE",
  authDomain: "linked-in-44180.firebaseapp.com",
  projectId: "linked-in-44180",
  storageBucket: "linked-in-44180.appspot.com",
  messagingSenderId: "376206898939",
  appId: "1:376206898939:web:5b5398980cc3b82307625e",
  measurementId: "G-P1XYEN5P65",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
