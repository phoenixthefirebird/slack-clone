import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyC4RT0qfZIWvLiWGO4078uH5T1GHkV9bUk",
    authDomain: "slack-clone-2021-d2a99.firebaseapp.com",
    projectId: "slack-clone-2021-d2a99",
    storageBucket: "slack-clone-2021-d2a99.appspot.com",
    messagingSenderId: "557901429058",
    appId: "1:557901429058:web:19d0c8a8b1ba6e1f2770db"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
