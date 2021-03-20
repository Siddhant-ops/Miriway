import firebase from "firebase/app";
import { firebaseConfig } from "./Firebase-config";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const Email__provider = new firebase.auth.EmailAuthProvider();

export { Email__provider, auth, firebaseApp };
export default db;
