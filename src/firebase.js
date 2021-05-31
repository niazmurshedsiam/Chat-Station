import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDs7NOSqsj85t-H6CnxaSmJMd4iH2R7aG0",
  authDomain: "chat-station-d1be2.firebaseapp.com",
  projectId: "chat-station-d1be2",
  storageBucket: "chat-station-d1be2.appspot.com",
  messagingSenderId: "1003792204454",
  appId: "1:1003792204454:web:68ec901e7229c414526a67",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;