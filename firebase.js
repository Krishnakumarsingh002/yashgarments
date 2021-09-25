import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAZiX1bhB2DOTVEZ5nRa0ia9A36qIQLV0s",
    authDomain: "yashgarmentsagra.firebaseapp.com",
    projectId: "yashgarmentsagra",
    storageBucket: "yashgarmentsagra.appspot.com",
    messagingSenderId: "1064182334534",
    appId: "1:1064182334534:web:2a353e10f51d9d7a80b647",
    measurementId: "G-KCV986MVE5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};
  export default firebase;
  