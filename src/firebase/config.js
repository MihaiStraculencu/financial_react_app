import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCX-fuLW3pKp9pxH61YtVKX8AlcHUPw6P0",
  authDomain: "moneyapp-e3bb4.firebaseapp.com",
  projectId: "moneyapp-e3bb4",
  storageBucket: "moneyapp-e3bb4.appspot.com",
  messagingSenderId: "632670885816",
  appId: "1:632670885816:web:73ef60325db22df711614d",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
