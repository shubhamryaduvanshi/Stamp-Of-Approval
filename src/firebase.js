import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCaNkoG14610EhEur2v2MvfHRseTHV_oyo",
  authDomain: "stampofapproval-5331f.firebaseapp.com",
  projectId: "stampofapproval-5331f",
  storageBucket: "stampofapproval-5331f.appspot.com",
  messagingSenderId: "672993771083",
  appId: "1:672993771083:web:c318cf214aff1dc7f417ce",
  measurementId: "G-83D5XELJHE"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };